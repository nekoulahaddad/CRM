import React from "react";
import styles from "./Login.module.scss";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as Avatar } from "../../assets/Avatar.svg";
import { ReactComponent as Defend } from "../../assets/Defend.svg";
import { ReactComponent as Lock } from "../../assets/Lock.svg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.titleForm}>Введите логин и пароль</div>
        <div className={styles.loginInputContainer}>
          <Avatar className={styles.inputIcon} />
          <input placeholder="Введите логин" className={styles.loginInput} />
        </div>
        <div className={styles.loginInputContainer}>
          <Lock className={styles.inputIcon} />
          <input placeholder="Введите пароль" className={styles.loginInput} />
        </div>
        <div className={styles.loginInputContainer}>
          <Defend className={styles.inputIcon} />
          <input
            placeholder="Введите google code"
            className={styles.loginInput}
          />
        </div>
        <div className={styles.loginButton}>Войти</div>
        <Link to="/changepassword" className={styles.forgetPasswordButton}>
          Забыли пароль? Нажмите здесь!
        </Link>
      </div>
    </div>
  );
}
