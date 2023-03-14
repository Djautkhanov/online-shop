import React from 'react';
import styles from "./Header.module.css"
import vector1 from "..//..//assets/Vector.png"
import vector2 from "..//..//assets/Vector2.png"
import basket from "..//..//assets/basket.png"

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerLogo}>
                <img src={vector1} alt="vector" />  
                <a href="#">Womazing</a> 
            </div>
            <div className={styles.headerLick}>
                <a href="#">Главная</a>
                <a href="#">Магазин</a>
                <a href="#">О бренде</a>
                <a href="#">Контакты</a>
            </div>
            <div className={styles.headersContact}>
                <img src={vector2} alt="phone" />
                <div className={styles.headerNumber}>+7 (495) 823-54-12</div>
                <div className={styles.headerBasket}><a href="#"><img src={basket} alt="" /></a></div>
            </div>
        </div>
    );
};

export default Header;