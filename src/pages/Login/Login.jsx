import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Login.module.css'

export const Login = () => {

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
    >
      <h1>Авторизация</h1>
      <label>
        Username:
        <input
          type='text'
          value=''
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
          Войти
        </button>
        
        <Link className={styles.link}
          to='/register'
        >
          Нет аккаунта ?
        </Link>
      </div>
    </form>
  )
}