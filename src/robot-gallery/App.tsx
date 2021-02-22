import React,{useState,useEffect} from 'react';//沒有這行會錯
import logo from './assets/images/logo.svg';
import styles from './App.module.css';
import robots from './mockdata/robots.json';
import Robot from './components/Robot';
import ShoppingCart from './components/ShoppingCart';

interface Props {}

interface State {
  robotGallery: any[]
}
const App:React.FC<Props> = (props) =>{
  const [count,setCount] = useState<number>(0);
  const [robotGallery,setRobotGallery] = useState<any>([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>{setRobotGallery(data)})
  },[]);
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>
          Oliver機器人精品專賣店
        </h1>
      </div>
      <ShoppingCart/>
      <div className={styles.robotList}>
        {console.log('robotGallery',robotGallery)}
        {robotGallery.map( item => <Robot key={item.id} id={item.id} name={item.name} email={item.email}/>)}
      </div>
    </div>
  );
}

export default App;
