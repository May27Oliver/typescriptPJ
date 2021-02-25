import React,{useContext} from 'react';
import styles from './Robot.module.css';
import {myContext} from '../../index';
interface RobotProps {
    id:number;
    name:string;
    email:string;
}

const Robot:React.FC<RobotProps> = ({id,name,email}) =>{
    const value = useContext(myContext);
    return(
            <div className={styles.cardContainer}>
            <img alt="robot" src={`https://robohash.org/${id}`}/>
                {/* 照片從robohash.org取得 */}
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{value.username}</p>
        </div>
    )
}

export default Robot;