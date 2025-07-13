from flask import Flask
from flask_socketio import SocketIO

socketio = SocketIO(cors_allowed_origins="*")

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'secret123'

    from .routes import main
    app.register_blueprint(main)

    socketio.init_app(app)
    return app
