
import {useState} from "react";

export default function App() {
  console.log("App jsx is created")
  const [myState,setMyState]= useState(0);
  
  //Properties
  function increase(){

setMyState(myState+1)

  }
  
  function decrease(){

setMyState(myState-1)

  }

  function modifyValue(newValue)
{
  setMyState(myState+newValue)
  
}
  return (
    <div className="App">
      <h1>React Excersize counter</h1>
      <h1>Buttons with arguments</h1>
      <button onClick={increase}>Increase Counter</button>
  <p>state:{myState}</p>
      <button onClick={decrease}>Deccrease Counter</button>
      <hr/>
      <h1>Buttons without arguments</h1>
      <button onClick={() => modifyValue(5)}>Increase value</button>
  
      <button onClick={() => modifyValue(0)}>Deccrease value</button>
    </div>
  );
}


