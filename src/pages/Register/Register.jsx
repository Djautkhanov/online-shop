import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Register.module.css'

export const Register = () => {

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
    >
      <h1>Регистрация</h1>
      <label>
        Username:
        <input
          type='text'
          placeholder='Username'
        />
      </label>

      <label>
        Password:
        <input
          type='password'
          value=''
          placeholder='Password'
        />
      </label>

      <div className={styles.divBtns}>

        <button
          type='submit'
          className={styles.login}
        >
          Подтвердить
        </button>
        <Link
          to='/login'
          className={styles.link}
        >
          Уже зарегистрированы ?
        </Link>
      </div>
    </form>
  )
}