from flask import Blueprint, jsonify, request
# from models import Metric
# from schema import metric_schema, metrics_schema

# Creación del Blueprint
api_metrics = Blueprint('metrics', __name__, url_prefix='/api-metrics')


@api_metrics.route('/')
def index():
    return 'Hello World'