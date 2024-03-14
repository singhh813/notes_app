from flask import Flask

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = "b4b6b136-e1c3-11ee-851c-2c56dc942e4c"
    from .views import views
    from .auth import auth
    app.register_blueprint(views,url_prefix="/")
    app.register_blueprint(auth,url_prefix="/")
    
    return app