import flask
from flask import request, Blueprint, abort
from .helpers import get_id, get_nutrient, get_serving_size
import json

NUTRIOLOGIST_API = Blueprint('nutriologist_api', __name__, url_prefix='/v1')

def get_blueprint():
    """Return the blueprint for the main app module"""
    return NUTRIOLOGIST_API

# app = flask.Flask(__name__)
# app.config["DEBUG"] = True
#Routes

@NUTRIOLOGIST_API.route('/nutriologist/food/nutrition/<foodname>', methods=['GET'])
def get_nutrition(foodname):
    fdc_id = get_id(foodname)
    if fdc_id == 0:
        abort(404)
    else:
        nutrition_label = {
            "serving_size" : get_serving_size(fdc_id)["serving_size"],
            "serving_size_unit": get_serving_size(fdc_id)["serving_size_unit"],
            "calories" : get_nutrient(fdc_id, "calories"),
            "fat" : get_nutrient(fdc_id, "fat"),
            "saturated_fat": get_nutrient(fdc_id, "saturatedFat"),
            "trans_fat" : get_nutrient(fdc_id, "transFat"),
            "cholesterol" : get_nutrient(fdc_id, "cholesterol"),
            "sodium" : get_nutrient(fdc_id, "sodium"),
            "carbohydrates" : get_nutrient(fdc_id, "carbohydrates"),
            "fiber" : get_nutrient(fdc_id, "fiber"),
            "sugars" : get_nutrient(fdc_id, "sugars"),
            "protein" : get_nutrient(fdc_id, "protein"),
            "calcium" : get_nutrient(fdc_id, "calcium"),
            "iron" : get_nutrient(fdc_id, "iron"),
            "potassium" : get_nutrient(fdc_id, "potassium"),
        }
        
        return json.dumps(nutrition_label)