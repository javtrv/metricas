class Config:
    pass


class DevelopmentConfig(Config):
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = 'postgresql://user_metrics:Faj441jay@localhost:5432/metrics_api'
    SQLALCHEMY_TRACK_MODIFICATIONS = False



config = {
    'development': DevelopmentConfig,
}