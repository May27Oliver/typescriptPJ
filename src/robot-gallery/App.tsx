import React from 'react';//沒有這行會錯
import logo from './assets/images/logo.svg';
import styles from './App.module.css';
import robots from './mockdata/robots.json';
import Robot from './components/Robot'

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>
          Oliver機器人精品專賣店
        </h1>
      </div>
      <div className={styles.robotList}>
        {robots.map( item => <Robot key={item.id} id={item.id} name={item.name} email={item.email}/>)}
      </div>
    </div>
  );
}

export default App;
