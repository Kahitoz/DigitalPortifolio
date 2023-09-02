from firebase_admin import credentials
from firebase_admin import firestore
import firebase_admin

my_firebase_credential = credentials.Certificate('dp_web_db.json')
firebase_admin.initialize_app(my_firebase_credential)

db = firestore.client()


def read_message(collection):
    data_list = []
    collection_ref = db.collection(collection)
    documents = collection_ref.stream()
    for document in documents:
        data_list.append({"document_id": document.id, "data": document.to_dict()})
    return data_list


def send_message(collection, name, message, )

