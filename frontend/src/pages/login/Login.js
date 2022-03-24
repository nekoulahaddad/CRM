import React, { useEffect, useState } from "react";
import styles from "./Login.module.scss";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as Message } from "../../assets/Message.svg";
import { ReactComponent as Lock } from "../../assets/Lock.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "store/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, loggedIn } = useSelector((state) => state.auth);
  let navigate = useNavigate();

  const handleLogin = (e) => {
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    loggedIn && navigate("/clients");
  }, [loggedIn]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.error}>{error ? error : null}</div>
        <div className={styles.titleForm}>Введите почту и пароль</div>
        <div className={styles.loginInputContainer}>
          <Message className={styles.inputIcon} />
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите почту"
            className={styles.loginInput}
          />
        </div>
        <div className={styles.loginInputContainer}>
          <Lock className={styles.inputIcon} />
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            className={styles.loginInput}
          />
        </div>

        <div onClick={(e) => handleLogin(e)} className={styles.loginButton}>
          Войти
        </div>
        <Link to="/changepassword" className={styles.forgetPasswordButton}>
          Забыли пароль? Нажмите здесь!
        </Link>
      </div>
    </div>
  );
}
