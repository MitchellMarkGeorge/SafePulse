from twilio.rest import Client
import requests, json, os
from flask import Flask, request, jsonify
from flask_cors import CORS


#verification stuff
ACCOUNT_SID = "AC625595eb95b974b23999488fa898c839"
AUTH_TOKEN = "742bd071ba30e7362b77e87aa5d2e1dd"

#string constants
STR_START = '<Response><Say>'
STR_END = '</Say></Response>'

client = Client(ACCOUNT_SID, AUTH_TOKEN) 

app = Flask(name)
CORS(app)

#make call to authorities with user information
def make_call(voice_message, user_num, client):
    call = client.calls.create(
                                twiml = voicemessage, 
                                to='+16479900182', 
                                from= '+1' + str(user_num))
    print(call.sid)

#read JSON information, get information
@app.route('/call', methods=['POST'])
def read():
    request_json = request.get_json()
    user_name = request_json['name']
    user_num = request_json['phone'] 
    user_address = request_json['address']

    if "access_information" in request_json:
        user_access = request_json['access_information']
        voice_message = str(STR_START + 'hello my name is ' + user_name + 'I am overdosing at ' + user_address + 'please send help' + user_access  + STR_END)
    else:
        voice_message = str(STR_START + 'hello my name is ' + user_name + 'I am overdosing at ' + user_address + 'please send help' + STR_END)
    try:
        # make_call(voice_message, user_num, client)
        make_call(1)
    except:
        print("Call was not able to be made")
        return json.dumps({'Error':True}), 403, {'ContentType':'application/json'} 
    return json.dumps({'Success':True}), 200, {'ContentType':'application/json'} 




# if name == "main":
#     main()
