import React from "react";
import styles from "./ClientForm.module.scss";
import { ReactComponent as Pencil } from "assets/Pencil.svg";

export default function ClientForm() {
  const inputs = [
    {
      title: "Имя",
      type: "text",
      name: "",
    },
    {
      title: "Фамилия   ",
      type: "text",
      name: "",
    },
    {
      title: "Фамилия   ",
      type: "text",
      name: "",
    },
    {
      title: "e-mail",
      type: "text",
      name: "",
    },
    {
      title: "Пол",
      type: "text",
      name: "",
    },
    {
      title: "Страна   ",
      type: "text",
      name: "",
    },
    {
      title: "Город",
      type: "text",
      name: "",
    },
    {
      title: "Дата рождения",
      type: "text",
      name: "",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {inputs.map((input, i) => (
          <div key={i} className={styles.input}>
            <label className={styles.title}>{input.title}</label>
            <div className={styles.inputWrapper}>
              <input type={input.type} className={styles.input} />
              <Pencil className={styles.icon} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
