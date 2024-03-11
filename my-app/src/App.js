import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [subjects, setSubjects] = useState([]); // State to hold subjects
  const [hours, setHours] = useState([]); // State to hold hours

  const handleAdd = () => {
    const subjectInput = document.getElementById('sub');
    const subjectValue = subjectInput.value;
    const hoursInput = document.getElementById('hour');
    const hoursValue = hoursInput.value;

    
    setSubjects([...subjects, subjectValue]); // Update state with new subject
    setHours([...hours, hoursValue]); // Update state with new hours
    subjectInput.value = ''; // Clear input field after adding subject
    hoursInput.value = ''; // Clear input field after adding hours
  };

  const decreaseHours = (index) => {
    const newHours = [...hours];
    newHours[index] = Math.max(0, newHours[index] - 1);
    setHours(newHours);
  };

  const increaseHours = (index) => {
    const newHours = [...hours];
    newHours[index] = parseInt(newHours[index]) + 1;
    setHours(newHours);
  };

  return (
    <div className="largeContainer">
      <h3>GEEKSTER EDUCATION PLANNER</h3>
      <div className="container">
        <input id="sub" type="text" placeholder="subject" />
        <input id="hour" type="number" placeholder="hours" />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        {/* Render subjects, hours, + and - buttons */}
        {subjects.map((subject, index) => (
          <div className='newDiv' key={index}>
            <span>{subject}</span>
            <span> -</span>
            <span>{hours[index]}</span>
            <button  class ="btn1"onClick={() => decreaseHours(index)}>-</button> {/* Decrease hours */}
            <button class ="btn2"onClick={() => increaseHours(index)}>+</button> {/* Increase hours */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
