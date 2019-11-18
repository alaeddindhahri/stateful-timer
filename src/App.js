import React from 'react';
import './App.css';
import Title from './components/AppTitle'
import Timer from './components/Timer'
function App() {
// const time={value:5};
  return (
    <div className="App">
      <Title/>
      <Timer/>
    </div>
  );
}

export default App;
