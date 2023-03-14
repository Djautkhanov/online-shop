import React from "react";
import styles from "./Home.module.css";
import arrowDown from "..//..//assets/down_arrow.png";
import allef1 from "..//..//assets/allef1.png";
import allef2 from "..//..//assets/allef2.png";
import allef3 from "..//..//assets/allef3.png";
import quality1 from "..//..//assets/quality1.png";
import quality2 from "..//..//assets/quality2.png";
import quality3 from "..//..//assets/quality3.png";
import imgTeam from "..//..//assets/fotksh.png";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeBlockTop}>
        <div className={styles.topText}>
          <div className={styles.topTextTitle}>
            Новые поступления в этом сезоне
          </div>
          <div className={styles.topTextContent}>
            Утонченные сочетания и бархатные оттенки - вот то, что вы искали в
            этом сезоне. Время исследовать.
          </div>
          <div className={styles.topButton}>
            <button className={styles.topButton1}>
              <img src={arrowDown} alt="arrow" />
            </button>
            <button className={styles.topButton2}>Открыть магазин</button>
          </div>
        </div>
        <div className={styles.topImage}>
          <img src={allef1} alt="" className={styles.topImg1} />
          <img src={allef2} alt="" className={styles.topImg2} />
          <img src={allef3} alt="" className={styles.topImg3} />
        </div>
      </div>
      <div className={styles.homeBlockCollection}>
        {/* !!!!!!!!!!переделать с данными с бэка  */}
        <div className={styles.collectionTitlle}>Новая коллекция</div>
        <div className={styles.collectionBlock}>
          <div className={styles.collectionItem}>
            <img src="" alt="" className={styles.collectionImage} />
            <div className={styles.collectionName}>Футболка USA</div>
            <div className={styles.collectionPrice}>$129</div>
          </div>
          <div className={styles.collectionItem}>
            <img src="" alt="" className={styles.collectionImage} />
            <div className={styles.collectionName}>Футболка USA</div>
            <div className={styles.collectionPrice}>$129</div>
          </div>
          <div className={styles.collectionItem}>
            <img src="" alt="" className={styles.collectionImage} />
            <div className={styles.collectionName}>Футболка USA</div>
            <div className={styles.collectionPrice}>$129</div>
          </div>
        </div>
        {/* !!!!!!!!!!переделать с данными с бэка  */}
        <button className={styles.collectionBtn}>Открыть магазин</button>
      </div>
      <div className={styles.homeBlockQuality}>
        <div className={styles.qualiteTitle}>Что для нас важно</div>
        <div className={styles.qualite}>
          <div className={styles.qualiteBlock}>
            <img src={quality1} alt="" className={styles.qualiteImage} />
            <div className={styles.qualiteBlockTitle}>Качество</div>
            <div className={styles.qualiteBlockText}>
              Наши профессионалы работают на лучшем оборудовании для пошива
              одежды беспрецедентного качества
            </div>
          </div>
          <div className={styles.qualiteBlock}>
            <img src={quality2} alt="" className={styles.qualiteImage} />
            <div className={styles.qualiteBlockTitle}>Скорость</div>
            <div className={styles.qualiteBlockText}>
              Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти
              единиц продукции в наших собственных цехах
            </div>
          </div>
          <div className={styles.qualiteBlock}>
            <img src={quality3} alt="" className={styles.qualiteImage} />
            <div className={styles.qualiteBlockTitle}>Ответственность</div>
            <div className={styles.qualiteBlockText}>
              Мы заботимся о людях и планете. Безотходное производство и
              комфортные условия труда - все это Womazing
            </div>
          </div>
        </div>
      </div>
      <div className={styles.homeBlockTeam}>
        <div className={styles.teamTitle}>Команда мечты Womazing</div>
        <div className={styles.teamBlokc}>
          <img src={imgTeam} alt="" className={styles.teamImage} />
          <div className={styles.teamContent}>
            <div className={styles.teamContentTitle}>Для каждой</div>
            <br />
            <br />
            <div className={styles.teamContentText}>
              Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.{" "}
              <br />
              <br />
              Womazing ищет эти мелочи и создает прекрасные вещи, которые
              выгодно подчеркивают достоинства каждой девушки.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
