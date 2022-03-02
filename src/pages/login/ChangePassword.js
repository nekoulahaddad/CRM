import React, { useState } from "react";
import styles from "./Login.module.scss";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as Message } from "../../assets/Message.svg";
import { Link } from "react-router-dom";

export default function ChangePassword() {
  const [passwordSent, setPasswordSent] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>
        {!passwordSent ? (
          <React.Fragment>
            <div className={styles.titleForm}>Введите ваш email</div>
            <div className={styles.loginInputContainer}>
              <Message
                className={`${styles.inputMessageIcon} ${styles.inputIcon}`}
              />
              <input
                placeholder="Введите ваш email"
                className={styles.loginInput}
              />
            </div>
            <div
              onClick={() => setPasswordSent(true)}
              className={styles.sendPasswordButton}
            >
              Отправить{" "}
            </div>
            <Link to="/" className={styles.forgetPasswordButton}>
              Вернуться назад.
            </Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className={`${styles.titleForm} ${styles.passwordSentTitle}`}>
              Письмо с восстановлением пароля отправлено на ваш email.
            </div>
            <Link
              to="/"
              className={`${styles.loginButton} ${styles.passwordSentButton}`}
            >
              Главная
            </Link>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
