from ..crud.crud import get_form_entry,form_entry,get_form_by_id,update_form
from ..Schema import AddEntry,Form_Entry,UpdateEntry
from fastapi.routing import APIRouter
from sqlmodel import Session
from fastapi import Depends,HTTPException
from ..database.db import get_session
from  typing import Annotated
router = APIRouter()

# Route to create a new form entry
@router.post("/form")
def create_form_entry(form: AddEntry, session: Annotated[Session, Depends(get_session)]):
    try:
        new_entry = form_entry(data=form, session=session)
        
        return {"message": "Form entry created successfully", "data": new_entry}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An unexpected error occurred: {str(e)}")

# Route to get all form entries
@router.get('/form/get')
def get_form(session: Annotated[Session, Depends(get_session)]):
    try:
        # Assuming get_form_entry is a function to retrieve form entries
        data = get_form_entry(session=session)
        
        if not data:
            # If no data is found, return a 404 error
            raise HTTPException(status_code=404, detail="No form entries found")
        
        return {"message": "Form entries retrieved successfully", "data": data}
    except HTTPException as e:
        # Re-raise HTTPException as FastAPI handles it automatically
        raise e
    except Exception as e:
        # Catch any other unexpected errors
        raise HTTPException(status_code=500, detail=f"An unexpected error occurred: {str(e)}")

@router.get("/form/getbyid/{id}")
def get_form_id(id: int, session: Annotated[Session, Depends(get_session)]):
    try:
        data = get_form_by_id(id=id, session=session)
        return data
    except HTTPException as e:
        # If an HTTPException is raised, it will be automatically handled by FastAPI.
        raise e
    except Exception as e:
        # Catch any other unexpected exceptions
        raise HTTPException(status_code=500, detail="An unexpected error occurred.")
    
@router.put("/form/update/{id}")
def update_form_Entry(
    id: int,
    data:UpdateEntry,
    session: Annotated[Session, Depends(get_session)]
):
    # try:
    updated_entry = update_form(id=id,data=data,session=session)
    return updated_entry
    # except Exception as e:
    #     raise HTTPException(status_code=500, detail=f"An unexpected error occurred: {str(e)}")
    
@router.delete("/form/delete/{id}")
def delete_form(
    id: int,
    session: Annotated[Session, Depends(get_session)]
):
    # Step 1: Get the form entry from the database
    form_to_delete = session.query(Form_Entry).filter(Form_Entry.id == id).first()

    if not form_to_delete:
        # If the form entry does not exist, raise a 404 error
        raise HTTPException(status_code=404, detail="Form entry not found")

    # Step 2: Delete the form entry
    try:
        session.delete(form_to_delete)
        session.commit()  # Commit the transaction to delete the entry
    except Exception as e:
        # If deleting fails (e.g., due to a database error), raise a 500 error
        session.rollback()  # Rollback in case of an error
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")

    # Step 3: Return success message
    return {"message": "Form entry deleted successfully"}