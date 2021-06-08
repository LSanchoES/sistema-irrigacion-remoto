import React, { useState } from 'react'

export const Camera = () => {
    const [refresher, setRefresher] = useState(1);

    const handleRefresh = () => {
       setRefresher(refresher + 1)
    };

    return (
        <div className="camera__container"> 
            <div className="camera__content">
                <i className="fas fa-camera"
                    onClick={handleRefresh}
                />
                
            </div>
            <img    src={`https://picsum.photos/1200?random=${refresher}`} 
                    alt="estriegana"
            />
      </div>
    )
}
