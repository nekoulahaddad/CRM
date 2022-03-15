const {Schema, Types, model} = require('mongoose')

const ShopUserRoleSchema = new Schema({
    value: { type: String, required: true },
    title: { type: String, required: true },
    translations: { type: Array, required: true }
})

module.exports = model('ShopUserRole', ShopUserRoleSchema)