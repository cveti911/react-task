import React from "react";

export default function Quadrant({ blue, children }){
    const fill = blue ? 'CornflowerBlue' : 'white'
    return (
        <div 
            className="quadrant"
            style={{ 
                backgroundColor: fill,
            }} 
        >
            {children}
        </div>
    )
}




