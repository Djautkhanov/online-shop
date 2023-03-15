import React from 'react'
import styles from "./OnePage.module.css";


const OnePage = () => {
  const [size, setSize] = React.useState()
  const [color, setColor] = React.useState()

  const sizes = ['S', 'M', 'L', 'XL', 'XXL']
  const colors = ['black', 'white', 'grey', 'blue', 'green', 'orange']

  const onClickChooseSize = (index) => {
    setSize(index)
  }

  const onClickChooseColor = (index) => {
    setColor(index)
  }

  return (
    <div className={styles.conteiner}>
      <h1>Свитшот Sweet Shot</h1>
      <div className={styles.titles}>
        <p>Главная </p>
        <p className={styles.line}> <p>— </p></p>
        <p>Свитшоты </p>
        <p className={styles.line}> <p>— </p></p>
        <p className={styles.fontP}> Свитшот Sweet Shot</p>
      </div>
      <div className={styles.item}>
        <img className={styles.img} src="" alt="" />
        <div className={styles.info}>
          <span>$311</span>
          <span className={styles.discount}>$450</span>
          <p>Выберите размер</p>
          <ul className={styles.addSize}>
            {sizes.map((el, i) => (
              <li onClick={() => onClickChooseSize(i)} className={size === i ? styles.activeSize : ''}>{el}</li>
            ))}
          </ul>
          <p>Выберите цвет</p>
          <ul className={styles.addColor}>
            {colors.map((el, i) => (
              <li onClick={() => onClickChooseColor(i)} className={color === i ? styles.activeColor : ''}>{el}</li>
            ))}
          </ul>
          <div className={styles.amountAndAdd}>
            <div className={styles.amount}>1</div>
            <button className={styles.addToCart}>Добавить в корзину</button>
          </div>
        </div>
      </div>
      <h2>Связанные товары</h2>
      <div className={styles.similarGard}>
        <img className={styles.imgSimilarGoods} src="" alt="" />
        <h3>Футболка USA</h3>
        <p>$129</p>
      </div>
    </div>
  )
}

export default OnePage
