import React from 'react';
import styles from "./Success.module.css"
import fileCheck from "..//..//assets/file-check.png"

const Success = () => {
    return (
    <div className={styles.mainBlock}>
    <div className={styles.block1}>
        <div className={styles.text1}>Заказ получен</div>
        <div className={styles.pages}>
        <div className={styles.pagesTetxt}>Главная - Оформление заказа -</div>
        <div className={styles.pagesTetxt1}>Заказ получен</div>
        </div>
    </div>
    <div className={styles.done}>
        <div className={styles.check}>
            <img src={fileCheck} alt="" className={styles.check}/>
            <div className={styles.checkText}>
                <div className={styles.chtext1}>Заказ успешно оформлен</div>
                <div className={styles.chtext2}>Мы свяжемся с вами в ближайшее время!</div>
            </div>
        </div>
        <button className={styles.doneBtn}>Перейти на главную</button>
    </div>
    </div>
    );
};

export default Success;