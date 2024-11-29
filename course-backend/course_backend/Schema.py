from sqlmodel import SQLModel,Field   
from pydantic import BaseModel



class Form_Entry(SQLModel,table = True):
    id: int = Field(default=None, primary_key=True)
    name: str
    email:str
    phone_number: str
    detail:str
class AddEntry(BaseModel):
    name: str
    email:str
    phone_number: str
    detail:str
    
class UpdateEntry(BaseModel):
    name: str
    email:str
    phone_number: str
    detail:str
    