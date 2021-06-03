import React from 'react'

export const CameraScreen = () => {
    return (
        <div className="camera__container">
            <div className="camera_screen">
                <img src="https://picsum.photos/200/300"/>
            </div>
            <div className="camera__button">
                <button>Refresh</button>
            </div>
        </div>
    )
}
