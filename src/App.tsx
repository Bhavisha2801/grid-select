import React, { useState } from 'react';
import './App.css';
import GridBox from './GridBox';

interface Box {
  box : number,
  countOfBox: number
}

function App() {

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(prev => prev + 1)
  }

  const [clickedBoxes, setClickedBoxes] = useState<Box>({
    box : 0,
    countOfBox : 0
  });

  const [addedBoxes, setAddedBoxes] = useState<number[]>([]);


  const data = [
    1,2,3,4,5,6,7,8,9
  ]

  const clickBox = (item: number) => {
    setCount(prev => prev + 1);
    console.log(count)
    setClickedBoxes((prev) => ({
      ...prev,
      box: prev.box + 1,
      countOfBox: prev.countOfBox + 1,
    }));
    setAddedBoxes((prev) => [...prev, item]);
  }


  console.log(clickedBoxes)

  return (
    <div className="App">
      {
        data.map((item: number) => {
          return <div className='box' onClick={() => clickBox(item)} key={item}>{addedBoxes.includes(item) ? clickedBoxes.countOfBox : ''}</div>
        })
      }
    </div>
  );
}

export default App;
