import React from "react";
import {useDraggable} from '@dnd-kit/core';



export default function Shape({id, groupId}){
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id,
      });
    
    return (
        <><div>
            {groupId === "Q1" &&
                <span className="shape" ref={setNodeRef} {...listeners} {...attributes}
                    style={{ display: "inline-block", cursor: "move" }}>◯</span>}
        </div>
        <div>
            {groupId === "Q2" &&
                <span className="shape" ref={setNodeRef} {...listeners} {...attributes}
                    style={{ display: "inline-block", cursor: "move" }}>⬡</span>}
        </div>
        <div>
            {groupId === "Q3" &&
                <span className="shape" ref={setNodeRef} {...listeners} {...attributes}
                    style={{ display: "inline-block", cursor: "move" }}>□</span>}
        </div>
        <div>
            {groupId === "Q4" &&
                <span className="shape" ref={setNodeRef} {...listeners} {...attributes}
                    style={{ display: "inline-block", cursor: "move" }}>△</span>}
        </div>
        </>

    )
}




