import React from 'react'

export const ElectroValveProgram = () => {


    return (
        <div className="ev-programmer__container">
                <div className="ev-programmer__daywrap">
                    <h3>L</h3>
                    <input type="time" id="LunesInicio" name="LunesInicio" />
                    <input type="time" id="LunesFin" name="LunesFin" />
                </div>
                <div className="ev-programmer__daywrap">
                    <h3>M</h3>
                    <input type="time" id="MartesInicio" name="MartesInicio" />
                    <input type="time" id="MartesFin" name="MartesFin" />
                </div>
                <div className="ev-programmer__daywrap">
                    <h3>X</h3>
                    <input type="time" id="MiercolesInicio" name="MiercolesInicio" />
                    <input type="time" id="MiercolesFin" name="MiercolesFin" />
                </div>
                <div className="ev-programmer__daywrap">
                    <h3>J</h3>
                    <input type="time" id="JuevesInicio" name="JuevesInicio" />
                    <input type="time" id="JuevesFin" name="JuevesFin" />
                </div>
                <div className="ev-programmer__daywrap">
                    <h3>V</h3>
                    <input type="time" id="ViernesInicio" name="ViernesInicio" />
                    <input type="time" id="ViernesFin" name="ViernesFin" />
                </div>
                <div className="ev-programmer__daywrap">
                    <h3>S</h3>
                    <input type="time" id="SabadoInicio" name="SabadoInicio" />
                    <input type="time" id="SabadoFIn" name="SabadoFIn" />
                </div>
                <div className="ev-programmer__daywrap">
                    <h3>D</h3>
                    <input type="time" id="DomingoInicio" name="DomingoInicio" />
                    <input type="time" id="DomingoFin" name="DomingoFin" />
                </div>
        </div>
    )
}
