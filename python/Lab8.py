import requests, re
from bs4 import BeautifulSoup

data = requests.get("https://www.kohls.com/product/prd-3426560/pink-floyd-dark-side-of-the-moon-vinyl-record.jsp?prdPV=29").content
soup = BeautifulSoup(data, 'html.parser')


span = soup.find("h1", {"class":"pdp-product-title"})
title = span.text
span = soup.find("div", {"class":"main-price"})
price = span.text

print("Item %s has price of %s" % (title, price))

#Example of output
#(webscraping) PS C:\it3038c-scripts\python> python .\Lab8.py
#
#Item
#                   Pink Floyd - Dark Side of the Moon Vinyl Record 
#            has price of
#
#                          $39.99            
#
#
#
