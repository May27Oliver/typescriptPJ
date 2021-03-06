import React,{useContext} from 'react';
import styles from './Robot.module.css';
import {myContext,mySetStateContext} from '../../AppState';
import {withAddToCart} from './HOC/AddToCart'
export interface RobotProps {
    id:number;
    name:string;
    email:string;
    addToCart:(id,name) => void;
}

const Robot:React.FC<RobotProps> = ({id,name,email,addToCart}) =>{
    const value = useContext(myContext);
    return(
            <div className={styles.cardContainer}>
            <img alt="robot" src={`https://robohash.org/${id}`}/>
                {/* 照片從robohash.org取得 */}
            <h2>{name}</h2>
            <p>{email}</p>
            <p>作者：{value.username}</p>
            <button onClick={()=>addToCart(id,name)}>加入購物車</button>
        </div>
    )
}

export default withAddToCart(Robot);