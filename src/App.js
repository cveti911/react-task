import ReactDOM from 'react-dom'
import React, {useState} from 'react';
import Shape from './shape'
import Quadrant from './Quadrant';
import {DndContext} from '@dnd-kit/core';

function App() {
  const [shapes, setShapes] = useState([
    {
      id: 'S1',
      groupId: 'Q1'
    },
    {
      id: 'S2',
      groupId: 'Q1'
    },
    {
      id: 'S3',
      groupId: 'Q1'
    },
    {
      id: 'S4',
      groupId: 'Q1'
    },
    {
      id: 'S5',
      groupId: 'Q1'
    }
  ]);

  function handleDragEnd(event) {
    if (!event.over) {
      return;
    }
    else{
      const updateShapes = shapes.map((shape)=>{
        if (shape.id === event.active.id){
          return {...shape, groupId: event.over.id};
        }
        return shape;
      });
      setShapes(updateShapes);
    }
  }

  return (
    <div className="App">
      <DndContext onDragEnd={handleDragEnd}>
        <div className='row'>
          <Quadrant id={'Q1'} blue='CornflowerBlue'>
            {shapes
              .filter(shape => shape.groupId === 'Q1')
              .map(shape => (
                <Shape id={shape.id} groupId={shape.groupId} />
              ))}
          </Quadrant>
          <Quadrant id={'Q2'}>
            {shapes
              .filter(shape => shape.groupId === 'Q2')
              .map(shape => (
                <Shape id={shape.id} groupId={shape.groupId} />
              ))}
          </Quadrant>
        </div>
        <div className='row'>
          <Quadrant id={'Q3'}>
            {shapes
              .filter(shape => shape.groupId === 'Q3')
              .map(shape => (
                <Shape id={shape.id} groupId={shape.groupId} />
              ))}
          </Quadrant>
          <Quadrant id={'Q4'} blue='CornflowerBlue'>
            {shapes
              .filter(shape => shape.groupId === 'Q4')
              .map(shape => (
                <Shape id={shape.id} groupId={shape.groupId} />
              ))}
          </Quadrant>
        </div>
      </DndContext>
    </div>
  );
  
}

export default App;
