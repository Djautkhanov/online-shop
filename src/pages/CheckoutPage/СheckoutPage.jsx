import React from "react";
import styles from "./CheckoutPage.module.scss";
const Checkout = () => {
  return (
    <div className={styles.checkout}>
      <h1>Оформление заказа</h1>
      <p className={styles.header}>Главная—Оформление заказа</p>
      <div className={styles.block}>
        <div className={styles.inputBlock}>
          <div className={styles.buyer}>
        <p className={styles.user}>Данные покупателя</p>
          </div>
          <div className={styles.inputs}>
            <input type="text" placeholder="Имя"></input>
            <input type="text" placeholder="E-mail"></input>
            <input type="text" placeholder="Телефон"></input>
          </div>
          <div className={styles.inputAddres}>
            <div className={styles.adress}>
            <p>Адрес покупателя</p>
            </div>
            <input type="text" placeholder="Страна"></input>
            <input type="text" placeholder="Город"></input>
            <input type="text" placeholder="Улица"></input>
            <input type="text" placeholder="Дом"></input>
            <input type="text" placeholder="Квартира"></input>
          </div>
        <p  className={styles.comment}>Комментарии</p>
        <textarea type="text" placeholder="Страна" className={styles.commentInput}></textarea>  
        </div>
        <div className={styles.productBlock}>
          <p>Ваш заказ</p>

          <div className={styles.cart}>
            <div className={styles.product}>
              <p>Товар</p>
              <p>Футболка USA</p>
              <p>Подытог</p>
              <p className={styles.paragraf}>Итого</p>
              <div className={styles.payment}>
              <p>Способ оплаты</p>
              </div>
              <p className={styles.cash}>  Оплата наличными</p>
              <button>Разместить заказ </button>
            </div>
            <div className={styles.all}>
              <p>Всего</p>
              <div className={styles.dollar}>  
              <p>129$</p>
              <p>129$</p>
              </div>
              <p className={styles.paragraf2}>129$</p>
            </div>         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
