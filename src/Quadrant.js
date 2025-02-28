import React from "react";
import {useDroppable} from '@dnd-kit/core';

export default function Quadrant({ id, blue, children }){
    const fill = blue ? blue : 'white'
    const {isOver, setNodeRef} = useDroppable({
        id
    })
    return (
        <div 
            className="quadrant"
            ref={setNodeRef}
            style={{ 
                backgroundColor: fill,
            }} 
        >
            {children}
        </div>
    )
}




