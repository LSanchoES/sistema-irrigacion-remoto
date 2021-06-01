import requests
import json

url = "http://127.0.0.1:5000//api/v1/resources/electro-valve/ison"

r = requests.post(url, data={"on": "true"})

if r.status_code != 200:
    print("Error:", r.status_code)

