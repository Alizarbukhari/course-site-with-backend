from ..Schema import Form_Entry,AddEntry,UpdateEntry
from typing import Annotated,Optional
from fastapi import Depends,HTTPException,status
from ..database.db import get_session
from sqlmodel import Session,select



def auth(phone: str,session: Annotated[Session, Depends(get_session)]):
    data = session.execute(select(Form_Entry).filter(Form_Entry.phone_number == phone)).first()

    if data:
        # Raise HTTPException if the phone number is already taken
        raise HTTPException(
            status_code=400,  # Bad Request, you can change this as per your use case
            detail="Phone number already exists"
        )
    print(data)
    # Continue with the rest of your logic (if needed)
    return data

    
# Your form_entry function
def form_entry(data: AddEntry, session: Annotated[Session, Depends(get_session)]):
    # First, validate the phone number before inserting the new entry
    auth(data.phone_number,session=session)  # Validate phone number

    # Create the new Form entry with the validated phone number
    statement = Form_Entry(
        name=data.name,
        email=data.email,
        phone_number=data.phone_number, 
        detail=data.detail
    )

    # Add the new entry to the session and commit to the database
    session.add(statement)
    session.commit()
    session.refresh(statement)

    return statement

def get_form_entry(session:Annotated[Session,Depends(get_session)] ):
    statment = session.exec(select(Form_Entry)).all()
    return statment

def get_form_by_id(id: int, session: Annotated[Session, Depends(get_session)]) -> Optional[Form_Entry]:
    result = session.exec(select(Form_Entry).where(Form_Entry.id == id)).first()
    
    return result

def update_form(id: int, data: UpdateEntry, session: Annotated[Session, Depends(get_session)]):
    # Validate the phone number before updating the existing entry
    auth(data.phone_number, session=session)  # Validate phone number
    
    # Get the existing form entry from the database
    existing_form = session.exec(select(Form_Entry).where(Form_Entry.id == id)).first()
    
    if not existing_form:
        # If no existing form is found, raise a 404 error
        raise HTTPException(status_code=404, detail="Form entry not found")

    # Update the existing form entry with the new data
    existing_form.name = data.name
    existing_form.email = data.email
    existing_form.phone_number = data.phone_number
    existing_form.detail = data.detail

    # Commit the changes to the database
    try:
        session.commit()
        session.refresh(existing_form)  # Refresh to get the latest data from the DB
    except Exception as e:
        session.rollback()  # Rollback if there is an error during commit
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")

    # Return the updated form entry
    return {"message": "Form entry updated successfully", "data": existing_form}
    