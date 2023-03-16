from marshmallow import Schema, fields
from marshmallow.validate import Length

class MetricSchema(Schema):
    class Meta:
        fields = ('id',
                  'name',
                  'value',
                  'date')


class ParamsMetricSchema(Schema):
    name = fields.Str(required=True, validate=Length(max=50))
    value = fields.Integer(required=True)
    date = fields.DateTime(required=True)



metric_schema = MetricSchema()
metrics_schema = MetricSchema(many=True)
metric_params_schema = ParamsMetricSchema()