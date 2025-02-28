import ReactDOM from 'react-dom'
import React, {useState} from 'react';
import Shape from './shape'
import Quadrant from './Quadrant';
import {DndContext} from '@dnd-kit/core';

/** 
* @function App - Here lives the majority of the functionality and logic.
* As I want to keep index.js minimalistic, I am not passing any values to App.
* 
* With the use of dnd-kit, to perform drag and drop, the components where those are used,
* have to be wrapped within a <DndContext /> component. How it is handled exactly is 
* detailed in @function handleDragEnd.
*
* Note: Quadrants are labelled as follows: Q1 - upper left, Q2 - upper right,
* Q3 - bottom left, Q4 - bottom right.
*/
function App() {
  /**
   * Manually input the number of shapes used for the page with "numberOfShapes".
   * As all shapes are in the upper left quadrant they are assigned Q1.
   * The id of each shape is defined as "S" and a unique number.
   */
  var numberOfShapes = 5
  var initShapes = [];

  for (var i = 1; i <= numberOfShapes; i++){
    initShapes.push({
      id: 'S'.concat(i),
      groupId: 'Q1'
    })
  }

  const [shapes, setShapes] = useState(initShapes);

  /**
   * The @function handleDragEnd handles what is happening with each shape as it is dragged.
   * Following the documentation of dnd-kit Quadrants are the droppable components and
   * Shapes are the draggable components. The goal of this function is to update the information
   * of which quadrant each shape is in.
   * 
   * @param {*} event - this event is fired once the draggable item is dropped. It contains
   *  information what is the id of the actively dragged shape (event.active.id) and if it is 
   *  dropped over a droppable item. 
   * 
   */
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
                <Shape key={shape.id} id={shape.id} groupId={shape.groupId} />
              ))}
          </Quadrant>
          <Quadrant id={'Q2'}>
            {shapes
              .filter(shape => shape.groupId === 'Q2')
              .map(shape => (
                <Shape key={shape.id} id={shape.id} groupId={shape.groupId} />
              ))}
          </Quadrant>
        </div>
        <div className='row'>
          <Quadrant id={'Q3'}>
            {shapes
              .filter(shape => shape.groupId === 'Q3')
              .map(shape => (
                <Shape key={shape.id} id={shape.id} groupId={shape.groupId} />
              ))}
          </Quadrant>
          <Quadrant id={'Q4'} blue='CornflowerBlue'>
            {shapes
              .filter(shape => shape.groupId === 'Q4')
              .map(shape => (
                <Shape key={shape.id} id={shape.id} groupId={shape.groupId} />
              ))}
          </Quadrant>
        </div>
      </DndContext>
    </div>
  );
  
}

export default App;
