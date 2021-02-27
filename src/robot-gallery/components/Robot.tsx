import React,{useContext} from 'react';
import styles from './Robot.module.css';
import {myContext,appSetStateContext} from '../../AppState';
interface RobotProps {
    id:number;
    name:string;
    email:string;
}

const Robot:React.FC<RobotProps> = ({id,name,email}) =>{
    const value = useContext(myContext);
    const setState = useContext(appSetStateContext);
    console.log('setState',setState);
    const addToCart = () => {
        if(setState){
            setState(state =>{
                return {
                    ...state,
                    shoppingCart:{
                        items:[...state.shoppingCart.items,{id,name}]
                    }
                }
            })
        }
    }

    return(
            <div className={styles.cardContainer}>
            <img alt="robot" src={`https://robohash.org/${id}`}/>
                {/* 照片從robohash.org取得 */}
            <h2>{name}</h2>
            <p>{email}</p>
            <p>作者：{value.username}</p>
            <button onClick={addToCart}>加入購物車</button>
        </div>
    )
}

export default Robot;