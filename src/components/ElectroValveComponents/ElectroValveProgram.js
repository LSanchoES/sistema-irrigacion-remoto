import React from 'react'

export const ElectroValveProgram = () => {


    return (
        <div className="ev-programmer__container">
            <div className="ev-programmer__daywrap">
                <h3>Program</h3>
                <input type="time" id="Inicio" name="Inicio" />
                <input type="time" id="Fin" name="Fin" />
            </div>
        </div>
    )
}
