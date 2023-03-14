import React from "react";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>Контакты</h1>
          <div className={styles.links}>
            <a href='' className={styles.link}>
              Главная
            </a>{" "}
            -{" "}
            <a href='' className={styles.selected_link}>
              Контакты
            </a>
          </div>
        </div>
        <div className={styles.mapBlock}>
          <iframe
            className={styles.map}
            src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8457.201567131968!2d45.68732726518023!3d43.32413893742918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1678783671991!5m2!1sru!2sru'
            width='100%'
            height='476'
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'></iframe>
        </div>
        <div className={styles.contacts}>
          <div className={styles.contactBlock}>
            <div className={styles.description}>Телефон</div>
            <div className={styles.info}>+7 (495) 823-54-12</div>
          </div>
          <div className={styles.contactBlock}>
            <div className={styles.description}>E-mail</div>
            <div className={styles.info}>info@sitename.com</div>
          </div>
          <div className={styles.contactBlock}>
            <div className={styles.description}>Адрес</div>
            <div className={styles.info}>г. Москва, 3-я улица Строителей, 25</div>
          </div>
        </div>
        <div className={styles.feedback}>
          <div className={styles.feedback_title}>Напишите нам</div>
          <div className={styles.feedback_form}>
            <input className={styles.feedback_form_input} type='text' placeholder='Имя' />
            <input className={styles.feedback_form_input} type='text' placeholder='E-mail' />
            <input className={styles.feedback_form_input} type='text' placeholder='Телефон' />
            <textarea
              className={styles.feedback_form_message_input}
              type='text'
              placeholder='Сообщение'
            />
            <button className={styles.feedback_form_button}>Отправить</button>
          </div>
          <div className={styles.feedback_message_block}>
            <div className={styles.feedback_message}>Сообщение успешно отправлено</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
