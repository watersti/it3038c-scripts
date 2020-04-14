import requests
import json

#Getting Data from the API Widget on the Node Server which is the localhost
r = requests.get('http://localhost:3000')

#To transfer the information to JSON
data = r.json()

#Outputting a read easy way to know which Widget is what color
#I used i for the idea of iteration
for i in data:
    widgetName = i['name']
    colorName  =i['color']
    print("%s is %s." %(widgetName, colorName))