import React from "react";
import styles from "./Footer.module.scss";
import vector1 from "..//..//assets/Vector.png";
import logoInstagram from "../../assets/logoInstagram.png";
import logoFacebook from "../../assets/logoFacebook.png";
import logoTwitter from "../../assets/logoTwitter.png";
import logovisa from "../../assets/logovisa-mastercard.png";  

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerFirst}>
        <div className={styles.footerLogo}>
          <img src={vector1} alt="vector" />
          <a href="#">Womazing</a>
        </div>
        <div className={styles.footerLick}>
          <a href="#">Главная</a>
          <a href="#">Магазин</a>
          <a href="#">О бренде</a>
          <a href="#">Контакты</a>
        </div>
        <div className={styles.footersContact}>
          <div className={styles.footerNumber}>+7 (495) 823-54-12</div>  
        </div>
      </div>

      <div className={styles.footerBlock}>  
        <div className={styles.footerInfo}>
          <p> © Все права защищены</p>
          <p> Политика конфиденциальности</p>
          <p> Публичная оферта</p>
        </div>

        <div className={styles.footerList}>  
          <a href="#">Пальто</a>
          <a href="#">Свитшоты</a>
          <a href="#">Кардиганы</a>
          <a href="#">Толстовки</a>
        </div>

        <div className={styles.footerContact}>
          <a href="#">hello@womazing.com</a>
          <div className={styles.footerLogos}>
          <img src={logoInstagram} alt="instagram" />
          <img src={logoFacebook} alt="facebook" />
          <img src={logoTwitter} alt="Twitter" />
          </div>
          <div className={styles.logovisa}>   
          <img src={logovisa} alt="visacard" /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
