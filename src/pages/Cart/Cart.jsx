import React from "react";
import styles from "./cart.module.css";

const Cart = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.title}>
        <h1>Корзина</h1>
        <div className={styles.titleP}>
          <p>Главная </p>
          <p> — </p>
          <p className={styles.fontP}> Корзина</p>
        </div>
      </div>
      <table>
        <thead>
          <td><h4>Товар</h4></td>
          <td><h4>Цена</h4></td>
          <td><h4>Количество</h4></td>
          <td><h4>Всего</h4></td>
          <td><h4>Удалить</h4></td>
        </thead>
        <tbody>
          <td>
            <div className={styles.img}></div>
          </td>
          <td>price</td>
          <td>
            <button className={styles.minus}>-</button>
            <b className={styles.amount}>1</b>
            <button className={styles.plus}>+</button>
          </td>
          <td>
            всего
          </td>
          <td>
            <button>х</button>
          </td>
        </tbody>
      </table>
      <div className={styles.coupon}>
        <div>
          <button className={styles.btn}>Введите купон</button>
          <button className={styles.btn}>Применить купон</button>
        </div>
        <button className={styles.btn}>Обновить корзину</button>
      </div>
      <div className={styles.order}>
        <button className={styles.btnTotal}>Итого: 124$</button>
        <button className={styles.btnOrder}>Оформить заказ</button>
      </div>
      
    </div>
  );
};

export default Cart;
