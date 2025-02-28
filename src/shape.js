import React from "react";
import {useDraggable} from '@dnd-kit/core';

/**
 * Within the Shape function is the implementatin of the useDraggable hook for the 
 * draggable functionality provided by the dnd-kit. It provides reference to each Shape.
 * 
 * Note: I am using span tag to ensure that the shapes are inline elements instead of block.
 * I felt like it gives an opportunity to populate more of the quadrant before having to reshape
 * the defined quadrants and making the user scroll.
 * 
 * Note2: I chose ASCII characters for the shapes. Each shape is associated with a given quadrant.
 * 
 * Note3: Quadrants are labelled as follows: Q1 - upper left, Q2 - upper right,
 * Q3 - bottom left, Q4 - bottom right.
 */

export default function Shape({id, groupId}){
    const {attributes, listeners, setNodeRef} = useDraggable({
        id,
      });
      const shapes = {
        Q1: "◯",
        Q2: "⬡",
        Q3: "□",
        Q4: "△"
      }

    
    return (
        <span className="shape" ref={setNodeRef} {...listeners} {...attributes}
            style={{ cursor: "move" }}>
                {shapes[groupId]}
        </span>
        
    )
}




