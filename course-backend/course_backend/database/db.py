from sqlmodel import Session ,create_engine ,select,SQLModel
import os
from dotenv import load_dotenv

load_dotenv()

# Create a connection to the database
connection_string= os.getenv("DATABASE_URL")
print(connection_string)
 
engine = create_engine(connection_string)


def create_table():
    SQLModel.metadata.create_all(engine)
    
def get_session():
    with Session(engine) as session:
        yield session
        

    