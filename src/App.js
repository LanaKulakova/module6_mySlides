import {useState} from "react";
import {data} from "./data";
import './App.css';

function App() {
const [rest, setRest] = useState(0);
const {id, name, address, description, image} = data[rest];


const previousRest = ()=> {
setRest((rest => {
  rest --;
  if (rest < 0 ) {
    return data.length-1;
  }
  return rest;
}))
}

const nextRest = ()=> {
  setRest((rest => {
    rest ++;
        if (rest > data.length-1) {
      rest = 0;
    }
    return rest;
  }))
}

  return (
    <div>

<div className="container">
  <h1> TOP-5 Restaurants to visit in Paris </h1>
</div>
      

<div className="container">
  <h3> {id} - {name} </h3>
</div>

<div className="container">
<img src={image} width="500px" alt="restaurant"  />
</div>

<div className="container">
  <h3> {description} </h3>
</div>

<div className="container">
  <h4> {address} </h4>
</div>

<div className="btn container">
  <button onClick={previousRest}> Previous </button>
  <button onClick={nextRest}> Next </button>
</div>

    </div>
  );
}

export default App;
