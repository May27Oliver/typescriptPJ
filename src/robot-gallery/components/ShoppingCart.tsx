import React,{useState} from 'react';
import styles from './ShoppingCart.module.css';
import { FiShoppingCart } from "react-icons/fi";
interface Props {//傳入狀態

}

interface State {//組件狀態
    isOpen:boolean
}

const ShoppingCart:React.FC = (props) => {
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
                <span>購物車 2（件）</span></button>
            {open?<div className={styles.cartDropDown}>
                <ul>
                    <li>robot 1</li>
                    <li>robot 2</li>
                </ul>
            </div>:''}
        </div>
    )
}

export default ShoppingCart;