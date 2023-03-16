from flask import Flask
from flask_migrate import Migrate
from app.models import db
from config import config
from app.views.views_metrics import api_metrics
import os
from dotenv import load_dotenv
from os.path import join, dirname

def create_app(environment):
    app = Flask(__name__)
    app.config.from_object(environment)
    app.register_blueprint(api_metrics)
    migrate = Migrate(app, db)
    with app.app_context():
        db.init_app(app)
        db.create_all()
    return app

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)


environment = config[os.environ.get("ENVIROMENT")]
app = create_app(environment)




if __name__ == '__main__':
    app.run(debug=True)