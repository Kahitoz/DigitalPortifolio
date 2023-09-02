from firebase_admin import credentials
from firebase_admin import firestore
import firebase_admin

my_firebase_credential = credentials.Certificate('dp_web_db.json')
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

