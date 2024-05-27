import json
from faker import Faker
import uuid
from datetime import datetime, timedelta

# Initialisation de Faker pour générer des données réalistes
fake = Faker()
Faker.seed(0)
subjects = ["Database", "Maths", "Cloud", "Big Data", "React", "NodeJs Express API"]
# Fonction pour générer une entrée de données
def generate_data_entry():
    entry = {
        "dateRendu": {
            "$date": (datetime.now() + timedelta(days=fake.random_int(min=1, max=30))).isoformat() + "Z"
        },
        "name": fake.email(),
        "student": {
            "name": fake.name(),
            "profile": fake.image_url(width=200, height=200),
            "_id": str(uuid.uuid4())
        },
        "subject": {
            "name":  fake.random_element(elements=subjects),
            "picture": fake.image_url(width=200, height=200),
            "_id": str(uuid.uuid4())
        },
        "teacher": {
            "fullName": fake.name(),
            "picture": fake.image_url(width=200, height=200),
            "_id": str(uuid.uuid4())
        },
        "__v": 0,
        "isHanded": fake.boolean(),
        "mark":fake.random_int(min=0, max=20),
        "remark":fake.sentence()
    }
    return entry

# Génération de 1000 entrées de données
data = [generate_data_entry() for _ in range(1000)]

# Enregistrement des données dans un fichier JSON
with open('test_data.json', 'w') as json_file:
    json.dump(data, json_file, indent=2)
