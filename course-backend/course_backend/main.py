from fastapi import FastAPI
from .database.db import create_table
from .rout.rout import router
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()


app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_methods=["*"],
        allow_headers=["*"],
        allow_credentials=True,
    )


@app.on_event("startup")
async def startup_event():
    print("Server started")
    create_table()
    print("table created succesfully")
app.include_router(router=router)   
    

def start():
    # create_tables()
    uvicorn.run("course_backend.main:app",host="127.0.0.1", port=8000, reload=True)   
