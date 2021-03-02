import React,{useState,useEffect} from 'react';//沒有這行會錯
import logo from './assets/images/logo.svg';
import styles from './App.module.css';
import robots from './mockdata/robots.json';
import Robot from './components/Robot';
import RobotDiscount from './components/RobotDiscount';
import ShoppingCart from './components/ShoppingCart';

interface Props {
}

interface State {
  robotGallery: any[]
}

//loading狀態添加
const App:React.FC<Props> = (props) =>{
  const [count,setCount] = useState<number>(0);
  const [robotGallery,setRobotGallery] = useState<any>([]);
  const [loading,setLoading]= useState<boolean>(false);
  const [error,setError] = useState<string>('');
  const fetchData = async()=>{
    setLoading(true);//loading畫面出現
    try{
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setRobotGallery(data);
    }catch(e){
      setError(e.message);
    }
    setLoading(false);//loading畫面結束
  }
  useEffect(()=>{
    fetchData();
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
      {!error||error!=="" && <div>{error}</div>}
      {
        loading?<h2>loading...</h2>:
        <div className={styles.robotList}>
          {robotGallery.map((item,index) => 
            index % 2 ===0 ? (
            <RobotDiscount key={item.id} id={item.id} name={item.name} email={item.email}/>
          ):(
            <Robot key={item.id} id={item.id} name={item.name} email={item.email}/>
          )
          )}
        </div>
      }
    </div>
  );
}

export default App;
