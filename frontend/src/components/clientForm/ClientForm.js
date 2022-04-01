import React, { useState, useEffect } from "react";
import styles from "./ClientForm.module.scss";
import { ReactComponent as Pencil } from "assets/Pencil.svg";
import { useParams } from "react-router-dom";
import PopUpSearch from "components/ui/popupSearch/PopUpSearch";
import { useSelector, useDispatch } from "react-redux";
import { getCountries, getCities, resetCities, resetCountries } from "store/regionSlice";

export default function ClientForm() {
  const { client } = useSelector((state) => state.clients);
  const { countries, cities } = useSelector((state) => state.regions);
  const dispatch = useDispatch();
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
      searchable: false,
    },
    {
      title: "Фамилия   ",
      type: "text",
      value: surname,
      handler: (value) => setSurname(value),
      searchable: false,
    },
    {
      title: "Email",
      type: "text",
      value: email,
      handler: (value) => setEmail(value),
      searchable: false,
    },
    {
      title: "Номер телефона   ",
      type: "text",
      value: phone,
      handler: (value) => setPhone(value),
      searchable: false,
    },
    {
      title: "Страна   ",
      type: "text",
      value: country,
      handler: (value) => setCountry(value),
      searchHandler: (searchTerm) => (searchTerm ? dispatch(getCountries({ searchTerm })) : dispatch(resetCountries())),
      resetHandler: () => dispatch(resetCountries()),
      searchable: true,
      data: countries,
    },
    {
      title: "Город",
      type: "text",
      value: city,
      handler: (value) => setCity(value),
      searchHandler: (searchTerm) => (searchTerm ? dispatch(getCities({ searchTerm })) : dispatch(resetCities())),
      resetHandler: () => dispatch(resetCities()),
      searchable: true,
      data: cities,
    },
    {
      title: "Дата рождения",
      type: "text",
      value: birthday,
      handler: (value) => setBirthday(value),
      searchable: false,
    },
    {
      title: "Пол",
      type: "text",
      value: gender,
      handler: (value) => setGender(value),
      searchable: false,
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
            {!input.searchable ? (
              <div className={styles.inputWrapper}>
                <input onChange={(e) => input.handler(e.target.value)} value={input.value} type={input.type} className={styles.input} />
                <Pencil className={styles.icon} />
              </div>
            ) : (
              <div style={{ position: "relative" }}>
                <div className={styles.inputWrapper}>
                  <input
                    onChange={(e) => {
                      input.handler(e.target.value);
                      input.searchHandler(e.target.value);
                    }}
                    value={input.value}
                    type={input.type}
                    className={styles.input}
                  />
                  <Pencil className={styles.icon} />
                </div>
                <PopUpSearch>
                  {input.data.length > 0 &&
                    input.data.map((option) => (
                      <div
                        key={option._id}
                        className={styles.searchOption}
                        onClick={() => {
                          input.resetHandler();
                          input.handler(option.value);
                        }}
                      >
                        {option.value}
                      </div>
                    ))}
                </PopUpSearch>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
