#from gpiozero import LED

class ElectroValve:
    def __init__(self, model):
        self.model = model
        self.PIN = 19
        self.on = False

    def setOn(self):
        self.on = True

    def setOff(self):
        self.on = False

    def isOn(self):
        return self.on

    def getModel(self):
        return self.model

    def getPin(self):
        return self.PIN
