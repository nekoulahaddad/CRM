# Admin ZUMZAK project



## Available Scripts



### Deployment
``` js
cd /var/www/admin.zumzak
git pull
npm i --> if there is new dependences
pm2 restart admin_zum
```

### Документация по API
Базовый url для запросов - https://admin.zumzak.com/api
Ответ сервера - в формате json.
Ответ может содержать два поля: 
- **status** - текстовая строка - "ok" в случае успешного запроса, "error" в случае ошибки 
- **message** - текстовая строка или ассоциативный массив - сообщение с результатами запроса (в случае успешного выполнения), сообщение об ошибке (в случае ошибки), поля может не быть или оно может быть пустым

#### Список клиентов (/costumers):
`обратите внимание клиенты на фронте берёт информацию из модели costumers на бэк`

Допустимые параметры (GET):
- sort_field (createdAt | activeTill ) - поле, по которому выполняется сортировка
- sort_direction (asc | desc) - направление сортировки
- page - номер страницы для пагинации

**Пример ответа:**

    {
        "status": "ok",
        "message": {
            "costumers": [
                {
                    "_id": 1,
                    "name": "Ivan",
                    "surname": "Ivanov",
                    "patronymic": "Ivanovesch",
                    "birthday": "17/01/1994",
                    "phone": "+75465454545",
                    "email": "zumzak@zumzak.com",
                    ...
                },
                {
                    "_id": 3,
                    "name": "Ivan",
                    "surname": "Ivanov",
                    "patronymic": "Ivanovesch",
                    "birthday": "17/01/1994",
                    "phone": "+75465454545",
                    "email": "zumzak@zumzak.com",
                    ...
                },
                {
                    "_id": 4,
                    "name": "Ivan",
                    "surname": "Ivanov",
                    "patronymic": "Ivanovesch",
                    "birthday": "17/01/1994",
                    "phone": "+75465454545",
                    "email": "zumzak@zumzak.com",
                    ...
                }
            ],
            "total_customer_count": "5"
        }
    }
