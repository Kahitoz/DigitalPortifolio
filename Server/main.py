from fastapi import FastAPI
from Firebase_functions import read_message, send_message;
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# route to retrive the message
@app.get('/read_message')
def get_message():
    data = read_message('Message')
    return {"data": data}

# route to send the message
class MessageData(BaseModel):
    name: str
    email: str
    purpose: str
    message: str

@app.post('/send_message')
def set_message(data: MessageData):
    try:
        send_message(data.name, data.email, data.purpose, data.message)
        return {"message": "The message has been sent successfully"}
    except Exception as e:
        return {"error": str(e)}
    
