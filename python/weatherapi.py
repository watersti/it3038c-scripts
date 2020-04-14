import requests
import json


print("Please enter your US zip code: ")
zip = input()

r = requests.get('https://api.openweathermap.org/data/2.5/weather?zip=45120,us&appid=9b45226bd2d1a1ef5ee6e4f71f376539')
data=r.json()
print(data['weather'][0]['description'])
