import React from "react";
import {useDraggable} from '@dnd-kit/core';



export default function Shape({id, groupId}){
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id,
      });

    return <span className="shape" ref={setNodeRef} {...listeners} {...attributes}
        style={{ display: "inline-block", cursor: "move"}}>◯</span>
}




