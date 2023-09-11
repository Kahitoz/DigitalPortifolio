from firebase_admin import credentials
from firebase_admin import firestore
import firebase_admin

my_firebase_credential = credentials.Certificate('E:\Projects\Project-5\DigitalPortifolio\Server\dp_web_db.json')
firebase_admin.initialize_app(my_firebase_credential)

db = firestore.client()

# Reading the data
def read_message(collection):
    data_list = []
    collection_ref = db.collection(collection)
    documents = collection_ref.stream()
    for document in documents:
        data_list.append({"document_id": document.id, "data": document.to_dict()})
    return data_list

# Sending message to the server
def send_message(name, email, purpose, message ):
    document_ref = db.collection('Message')
    document_ref.add({
        "email": email,
        "message": message,
        "name": name,
        "purpose": purpose
    })

# Reterive the resume link
def get_resume_link():
    resume_list = [] 
    collection_ref = db.collection('Info')
    documents = collection_ref.stream()
    for document in documents:
        data = document.to_dict()
        if 'short' in data and 'detailed' in data:
            short_resume = data['short']
            detailed_resume = data['detailed']
            resume_list.append({"short":short_resume, "detailed":detailed_resume})
    return resume_list

  



