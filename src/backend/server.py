import flask
from flask import request, jsonify, json
from flask_cors import CORS, cross_origin
import ElectroValve as ev

app = flask.Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config["DEBUG"] = True

EV = ev.ElectroValve("JARDIBRIC")

#url = "http://127.0.0.1:5000//api/v1/resources/electro-valve/on" URL TEST

@app.route('/', methods=['GET'])
@cross_origin()
def home():
    return "<h1>Irrigation Backend</h1>"


@app.route('/api/v1/resources/electro-valve/model', methods=['GET'])
def api_model():
    return jsonify(EV.getModel())


@app.route('/api/v1/resources/electro-valve/pin', methods=['GET'])
def api_pin():
    return jsonify(EV.getPin())


@app.route('/api/v1/resources/electro-valve/ison', methods=['GET'])
def api_ison():
    return jsonify(EV.isOn())


@app.route('/api/v1/resources/electro-valve/on', methods=['POST'])
def api_on():
    _on = request.form.get('on')

    if(_on == 'true'):
        EV.setOn()
    elif (_on == 'false'):
        EV.setOff()

    return jsonify('ok')


app.run()
