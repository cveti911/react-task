import ReactDOM from 'react-dom'
import Shape from './shape'
import Quadrant from './Quadrant';

function App() {
  return (
    <div className="App">
      <div className='row'>
        <Quadrant blue>
          <Shape id={1} groupId={1} />
          <Shape id={2} groupId={1}/>
          <Shape id={3} groupId={1}/>
          <Shape id={4} groupId={1}/>
          <Shape id={5} groupId={1}/>
        </Quadrant>
        <Quadrant>
        <Shape id={5} groupId={1}/>
        <Shape id={5} groupId={1}/>
        <Shape id={5} groupId={1}/>
        </Quadrant>
      </div>
      <div className='row'>
        <Quadrant>
        <Shape id={5} groupId={1}/>
        </Quadrant>
        <Quadrant blue>
        <Shape id={5} groupId={1}/>
        <Shape id={5} groupId={1}/>
        </Quadrant>
      </div>

    </div>
  );
}

export default App;
