import React, { useState } from 'react';
import './App.css';
import { Circle } from './Circle';



function App() {

  const [CircleList, setCircleList] = useState([]);

  const handleAddCircle = () => {
    const nextId = () => CircleList.length === 0 ? 0 : CircleList[CircleList.length-1].key + 1;
    const nextCircle = {
      key: nextId(),
      text: "lorem ipsum"
    }
    setCircleList([...CircleList, nextCircle]);
  }

  const handleDeleteCircle = () => {
    const newList = CircleList.slice(0,-1);
    setCircleList(newList);
  }

  return (
    <div className="App">
      <div className="buttonContainer">
        <button onClick={handleAddCircle}>dodaj nowe kółko</button>
        <button onClick={handleDeleteCircle}>usuń ostatnie kółko</button>
      </div>
      <div className="circleContainer">
        {CircleList.map((circle) => <Circle key={circle.key}>{circle.text}</Circle>)}
      </div>
    </div>
  );
}

export default App;
