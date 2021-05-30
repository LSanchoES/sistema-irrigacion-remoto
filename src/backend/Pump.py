#from gpiozero import LED

class Pump:
    def __init__(self, model):
        self.model = model
        self.PIN = 19
        self.on = False

    def on():
        self.on = True

    def off():
        self.off = False

    def isOn():
        return self.on

    def getModel():
        return self.model

    def getPIN():
        return self.PIN
