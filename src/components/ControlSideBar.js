import React from 'react'
import { ElectroValveStatus } from './ControlSideComponents/ElectroValveStatus'
import { Humedad } from './ControlSideComponents/Humedad'
import { Luminosidad } from './ControlSideComponents/Luminosidad'
import { Temperatura } from './ControlSideComponents/Temperatura'

export const ControlSideBar = () => {
    return (
        <div className="control-sidebar__container">
            <ElectroValveStatus />
            <Temperatura />
            <Humedad />
            <Luminosidad />
        </div>
    )
}
