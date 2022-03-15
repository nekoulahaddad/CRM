const {Schema, Types, model} = require('mongoose')

const ShopUserJWTSchema = new Schema({
    user_id: { type: Types.ObjectId},
    email: { type: String, required: true },
    token: { type: String, required: true },
    refresh: { type: String, required: true }
})

module.exports = model('ShopUserJWT', ShopUserJWTSchema)