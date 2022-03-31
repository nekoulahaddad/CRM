import React, { useState, useEffect } from "react";
import styles from "./ClientForm.module.scss";
import { ReactComponent as Pencil } from "assets/Pencil.svg";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ClientForm() {
  const { client } = useSelector((state) => state.clients);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const { id } = useParams();

  const inputs = [
    {
      title: "Имя",
      type: "text",
      value: name,
      handler: (value) => setName(value),
    },
    {
      title: "Фамилия   ",
      type: "text",
      value: surname,
      handler: (value) => setSurname(value),
    },
    {
      title: "Email",
      type: "text",
      value: email,
      handler: (value) => setEmail(value),
    },
    {
      title: "Номер телефона   ",
      type: "text",
      value: phone,
      handler: (value) => setPhone(value),
    },
    {
      title: "Страна   ",
      type: "text",
      value: country,
      handler: (value) => setCountry(value),
    },
    {
      title: "Город",
      type: "text",
      value: city,
      handler: (value) => setCity(value),
    },
    {
      title: "Дата рождения",
      type: "text",
      value: birthday,
      handler: (value) => setBirthday(value),
    },
    {
      title: "Пол",
      type: "text",
      value: gender,
      handler: (value) => setGender(value),
    },
  ];

  useEffect(() => {
    setName(client.name);
    setSurname(client.surname);
    setBirthday(client.birthday);
    setEmail(client.email);
    setPhone(client.phone);
    setGender(client.gender);
  }, [client]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {inputs.map((input, i) => (
          <div key={i} className={styles.input}>
            <label className={styles.title}>{input.title}</label>
            <div className={styles.inputWrapper}>
              <input onChange={(e) => input.handler(e.target.value)} value={input.value} type={input.type} className={styles.input} />
              <Pencil className={styles.icon} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
