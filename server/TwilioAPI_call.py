from twilio.rest import Client
import requests
import json

#verification stuff
ACCOUNT_SID = "AC625595eb95b974b23999488fa898c839"
AUTH_TOKEN = "e010811a66a2ed9395a1b19fb761f05a"

#string constants
STR_START = '<Response><Say>'
STR_END = '</Say></Response>'

json_data = {'Name':'John', 'Phone':'6477803866', 'Address':'123 Street Street'} #test JSON
client = Client(ACCOUNT_SID, AUTH_TOKEN) 

#get information on user for call
def get_info(json_data):
    user_name = json_data['Name']
    user_num = json_data['Phone'] 
    user_address = json_data['Address']
    return user_name, user_num, user_address

#make call to authorities with user information
def make_call(user_name, user_num, user_address, client):
    call = client.calls.create(
                                twiml = str(STR_START + 'hello my name is ' + user_name + 'I am overdosing at ' + user_address + 'please send help' + STR_END), 
                                to='+16479900182', 
                                from_= '+1' + str(user_num))
    print(call.sid)

def main():
    user_name, user_num, user_address = get_info(json_data)
    make_call(user_name, user_num, user_address, client)
    


if __name__ == "__main__":
    main()