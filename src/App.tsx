import React, { useState } from 'react';
import './App.css';
import GridBox from './GridBox';

interface Box {
  box : number,
  countOfBox: number
}

function App() {

  const [count, setCount] = useState(1);

  const [clickedBoxes, setClickedBoxes] = useState<{ [key: number]: number }>({});

  const data = [
    1,2,3,4,5,6,7,8,9
  ]

  const clickBox = (item: number) => {
    if(count > 9 || clickedBoxes[item]) return;

    setClickedBoxes((prev) => ({
      ...prev,
      [item]: count,
    }));
    setCount(prev => prev + 1);
  };


  const clearSelection = () => {
    setClickedBoxes({});
    setCount(1)
  }

  console.log(clickedBoxes, 'clicked boxes')

  return (
    <div className="App">
      <div className='grid'>
      {
        data.map((item: number) => {
          return <div className={`box ${clickedBoxes[item] ? 'selected' : ''}`} onClick={() => clickBox(item)} key={item}>{clickedBoxes[item] || ''}</div>
        })
      }
      </div>
      <button className='clear-btn' onClick={() => clearSelection()} >Clear</button>
    </div>
  );
}

export default App;
