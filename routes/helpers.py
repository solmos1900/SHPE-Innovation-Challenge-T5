import flask
from flask import request, jsonify
import requests
from pprint import pprint
import json, sys
from pprint import pprint

def get_id(food):    
    pprint(food)
    url = "https://api.nal.usda.gov/fdc/v1/foods/list/?query={item}".format(item = str(food))
    payload = {}
    headers = {
    'x-api-key': 'yJyIE6JtzBajb4lLRIg35BvHSQLqgJivUphuqo4i'
    }
    pprint(url)

    response = requests.request("GET", url, headers=headers, data = payload)
    data = response.json()
    
    if len(data) <= 0:
        return 0
    else:
        first_item = data[0]

        fdc_id = first_item.get("fdcId")
        #789266
        pprint("THE ID IS "+str(fdc_id))
        return fdc_id

def get_nutrient(fdc_id):    
    
    url = "https://api.nal.usda.gov/fdc/v1/food/{item}".format(item = fdc_id)

    payload = {}
    headers = {
    'x-api-key': 'yJyIE6JtzBajb4lLRIg35BvHSQLqgJivUphuqo4i'
    }

    response = requests.request("GET", url, headers=headers, data = payload)
    data = response.json()
    label_nutrients = data.get("labelNutrients")

    if str(label_nutrients) == 'None':
        
        food_nutrients = data.get("foodNutrients")

        nutrition_label = {
            "serving_size" : -1,
            "serving_size_unit": -1,
            "calories" : -1,
            "fat" : -1,
            "saturated_fat": -1,
            "trans_fat" : -1,
            "cholesterol" : -1,
            "sodium" : -1,
            "carbohydrates" : -1,
            "fiber" : -1,
            "sugars" : -1,
            "protein" : -1,
            "calcium" : -1,
            "iron" : -1,
            "potassium" : -1
        }
        for fd in food_nutrients:
            da_nutrient = fd.get("nutrient")
            n_name = da_nutrient.get("name")
            n_name = str(n_name)

            if n_name == "Energy":
                n_name = "calories"
            if n_name == "Total lipid (fat)":
                n_name = "fat"
            if "," in n_name:
                n_name = n_name.split(',', 1)
                n_name = str(n_name[0])
            if " " in n_name:
                n_name = n_name.split(' ', 1)
                n_name = str(n_name[0])

            n_name = n_name.lower()

            if n_name in nutrition_label:

                u_name = da_nutrient.get("unitName")
                amount = fd.get("amount")
                if u_name == "µg":
                    u_name = "micro g"

                nutrition_label[n_name] = str(amount)+str(u_name)

                pprint(nutrition_label)
                return nutrition_label
    else:
        nutrients_list = ["calories", "fat", "saturatedFat", "transFat", 
        "cholesterol", "sodium", "carbohydrates", "fiber", 
        "sugars", "protein", "calcium", "iron", "potassium"]

        nutrition_label = {
            "serving_size" : -1,
            "serving_size_unit": -1,
            "calories" : -1,
            "fat" : -1,
            "saturated_fat": -1,
            "trans_fat" : -1,
            "cholesterol" : -1,
            "sodium" : -1,
            "carbohydrates" : -1,
            "fiber" : -1,
            "sugars" : -1,
            "protein" : -1,
            "calcium" : -1,
            "iron" : -1,
            "potassium" : -1
        }
        for nutri in nutrients_list:
            if nutri == "saturatedFat":
                _nutri = "saturated_fat"
                if _nutri in nutrition_label:
                    nutrition_label[_nutri] = label_nutrients.get(nutri)
            elif nutri == "transFat":
                _nutri = "trans_fat"
                if _nutri in nutrition_label:
                    nutrition_label[_nutri] = label_nutrients.get(nutri)
            else: 
                if nutri in nutrition_label:
                    nutrition_label[nutri] = label_nutrients.get(nutri)
        
        pprint(nutrition_label)
        return nutrition_label

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

    x = get_id("oreo")
    pprint(x)
    pprint(get_nutrient(x))
