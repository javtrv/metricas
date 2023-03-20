from flask import Blueprint, jsonify, request
from ..response import bad_request, response, not_found
from ..models.metric import Metric
from ..schema import metric_schema, metrics_schema, metric_params_schema



# Creación del Blueprint
api_metrics = Blueprint('metrics', __name__, url_prefix='/api-metrics')


def set_metric(func):
    def wrap(*args, **kwargs):
        id = kwargs.get('id', 0)
        cliente = Metric.query.filter_by(id=id).first()
        if cliente is None:
            return not_found()

        return func(cliente)
    wrap.__name__ = func.__name__
    return wrap


@api_metrics.route('/metrics', methods=['GET'])
def get_metrics():
    all_metrics = Metric.query.all()
    return response(metrics_schema.dump(all_metrics))

@api_metrics.route('/metric', methods=['POST'])
def add_metric():
    json = request.get_json(force=True)
    print(json)
    if metric_params_schema.validate(json):
        return bad_request(metric_params_schema.validate(json))
    
    try:
        new_metric = Metric.new(
            json['name'],
            json['value'],
            json['date']
        )
    except:
        return bad_request("Error with the json")
    
    save = new_metric.save()
    if save == True:
        return response(metric_schema.dump(new_metric))
    else:
        return bad_request(save)

@api_metrics.route('/metrics/<start_date>/<end_date>', methods=['GET'])
def get_metrics_by_date(start_date, end_date):
    all_metrics = Metric.query.filter(Metric.date.between(start_date, end_date)).all()
    return response(metrics_schema.dump(all_metrics))
