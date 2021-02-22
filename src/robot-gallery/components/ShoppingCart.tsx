import React from 'react';
import styles from './ShoppingCart.module.css';
import { FiShoppingCart } from "react-icons/fi";
interface Props {//傳入狀態

}

interface State {//組件狀態
    isOpen:boolean
}

class ShoppingCart extends React.Component<Props,State> {
    constructor(props:Props){
        super(props);
        this.state = {
            isOpen:false,
        }
    }
    handleShowList = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{//將下面onClick的event資料型態寫進這裡的e後面
        this.setState({
            isOpen:this.state.isOpen?false:true,
        })
    }
    render(){
        return(
            <div className={styles.cardContainer}>
                <button className={styles.button} 
                onClick={this.handleShowList}
                >
                    <FiShoppingCart/>
                    <span>購物車 2（件）</span></button>
                {this.state.isOpen?<div className={styles.cartDropDown}>
                    <ul>
                        <li>robot 1</li>
                        <li>robot 2</li>
                    </ul>
                </div>:''}
            </div>
        )
    }
}

export default ShoppingCart;