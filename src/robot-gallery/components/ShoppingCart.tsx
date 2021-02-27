import React,{useState,useContext} from 'react';
import styles from './ShoppingCart.module.css';
import { FiShoppingCart } from "react-icons/fi";
import {myContext} from '../../AppState';
interface Props {//傳入狀態

}

interface State {//組件狀態
    isOpen:boolean
}

const ShoppingCart:React.FC = (props) => {
    const value = useContext(myContext);
    console.log('val',value);
    const [open,setOpen] = useState(false);
    const handleShowList = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{//將下面onClick的event資料型態寫進這裡的e後面
        setOpen(open?false:true);
    }
    return(
        <div className={styles.cardContainer}>
            <button className={styles.button} 
            onClick={handleShowList}
            >
                <FiShoppingCart/>
                <span>購物車 {value.shoppingCart.items.length}（件）</span></button>
            {open?<div className={styles.cartDropDown}>
                <ul>
                    {value.shoppingCart.items.map(item=>
                        <li>{item.name}</li>
                    )}
                </ul>
            </div>:''}
        </div>
    )
}

export default ShoppingCart;