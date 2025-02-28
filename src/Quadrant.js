import React from "react";
import {useDroppable} from '@dnd-kit/core';


/**
 * 
 * Within the function Quadrant is the implementation of the useDroppable hook to provide
 * the droppable functionality of dnd-kit. It provides a reference so collisions with 
 * draggable elements can be detected.
 * 
 * Note: A quadrant is either going to be white or it would take upon the colour that is passed
 * through the variable "blue" (I assume the colour will be blue per my definition, but it can be
 * anything).
 */

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




