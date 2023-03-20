class Config:
    pass


class DevelopmentConfig(Config):
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = 'postgresql://metricsapidb_user:gobNU4i8PQXy3857OfTDLON3IDmwc8kv@dpg-cgc5aeo2qv267ubdv0mg-a.oregon-postgres.render.com/metricsapidb'
    SQLALCHEMY_TRACK_MODIFICATIONS = False



config = {
    'development': DevelopmentConfig,
}