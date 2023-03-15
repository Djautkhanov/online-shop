import React from 'react';
import styles from "./Header.module.css"
import vector1 from "..//..//assets/Vector.png"
import vector2 from "..//..//assets/Vector2.png"
import basket from "..//..//assets/basket.png"
import { NavLink , Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header_wrapper}>
            <div className={styles.headerLogo}>
                <img src={vector1} alt="vector" />  
                <a href="#">Womazing</a> 
            </div>
            <div className={styles.headerLick}>  
                <NavLink className={({ isActive }) => isActive ? styles.active : styles.nav_link} to={'/'}>Главная</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.active : styles.nav_link} to={'/shop'}>Магазин</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.active : styles.nav_link} to={'/'}>О бренде</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.active : styles.nav_link} to={'/contact'}>Контакты</NavLink>
            </div>
            <div className={styles.headersContact}>
                <img src={vector2} alt="phone" />
                <div className={styles.headerNumber}>+7 (495) 823-54-12</div>
                <div className={styles.headerBasket}><Link to={'/cart'}><img src={basket} alt="" /></Link></div>
                <Link className={styles.auth} to={'/login'}>Войти</Link>
            </div>
            </div>
        </div>
    );
};

export default Header;