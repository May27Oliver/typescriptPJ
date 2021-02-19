import React from 'react';//沒有這行會錯
import '../App.css';
import robots from './mockdata/robots.json';
import Robot from './components/Robot'

console.log(robots);

const App = () => {
  return (
    <ul>
      {robots.map( item => <Robot id={item.id} name={item.name} email={item.email}/>)}
    </ul>
  );
}

export default App;
