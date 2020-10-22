import flask
from flask import request, jsonify
import requests
from pprint import pprint
import json, sys
from pprint import pprint
# def query(food):    

#     url = "https://api.nal.usda.gov/fdc/v1/foods/list/?query={item}".format(item = str(food))
#     payload = {}
#     headers = {
#     'x-api-key': 'YOURKEY'
#     }
#     response = requests.request("GET", url, headers=headers, data = payload)
#     data = response.json()

#     if len(data) <= 0:
#         status_code = 404#not found
#     else:
#         status_code = 200#succesful, found
    
#     return data, status_code

def get_id(food):    

    url = "https://api.nal.usda.gov/fdc/v1/foods/list/?query=".format(item = str(food))

    payload = {}
    headers = {
    'x-api-key': 'YOURKEY'
    }
    response = requests.request("GET", url, headers=headers, data = payload)
    data = response.json()
    
    if len(data) <= 0:
        return 0
    else:
        first_item = data[0]

        fdc_id = first_item.get("fdcId")
        pprint(str(fdc_id))
        return fdc_id

def get_nutrient(fdc_id, nutrient):    

    url = "https://api.nal.usda.gov/fdc/v1/food/{item}".format(item = fdc_id)

    payload = {}
    headers = {
    'x-api-key': 'YOURKEY'
    }
    response = requests.request("GET", url, headers=headers, data = payload)
    data = response.json()
    label_nutrients = data.get("labelNutrients")
    try:
        if label_nutrients[nutrient]:
            return label_nutrients[nutrient]["value"]
        else: 
            return -1
    except (Exception, KeyError) as error:
        print(error)
        return -1

def get_serving_size(fdc_id):    

    url = "https://api.nal.usda.gov/fdc/v1/food/{item}".format(item = fdc_id)

    payload = {}
    headers = {
    'x-api-key': 'YOURKEY'
    }
    response = requests.request("GET", url, headers=headers, data = payload)
    data = response.json()

    serving_size = data.get("servingSize")
    serving_size_unit = data.get("servingSizeUnit")

    serving_details = {
        "serving_size" : serving_size,
        "serving_size_unit" : serving_size_unit
    }

    return serving_details


if __name__ == '__main__':
    #get_id("water")
    #pprint(get_id("water"))
    get_calories(763004)
    #query("maijfafrbjcsda")