const {Schema, Types, model} = require('mongoose')

const shopUserSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    patronymic: { type: String, required: false },
    birthday: { type: Date, required: false, default: null },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    shop_id: { type: Types.ObjectId},
    roles: { type: Array, required: false, default: 'user' },
    region: { 
        _id: { type: Types.ObjectId},
        value: { type: String }
    },
    active: { type: Boolean, default: true },
    deleted: { type: Boolean, default: false },
})

module.exports = model('ShopUser', shopUserSchema)