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

@NUTRIOLOGIST_API.route('/nutriologist/food/nutrition/<string:_foodname>', methods=['GET'])
def get_nutrition(_foodname):
    fdc_id = get_id(_foodname)
    print(fdc_id)
    if fdc_id == 0:
        abort(404)
    else:

        nutrition_label = get_nutrient(fdc_id)
        return json.dumps(nutrition_label)