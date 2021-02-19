import React from 'react';

interface RobotProps {
    id:number;
    name:string;
    email:string;
}

const Robot:React.FC<RobotProps> = ({id,name,email}) =>{
    return(
        <li>
            <img alt="robot" src={`https://robohash.org/${id}`}/>
                {/* 照片從robohash.org取得 */}
            <h2>{name}</h2>
            <p>{email}</p>
        </li>
    )
}

export default Robot;