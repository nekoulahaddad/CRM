const {Schema, Types, model} = require('mongoose')

const ShopUserPWDSchema = new Schema({
    user_id: { type: Types.ObjectId},
    email: { type: String, required: true },
    password: { type: String, required: true },
    reset: {
        expiresIn: { type: Date, required: false, default: null },
        token: { type: String, required: false, default: null }
    }
})

module.exports = model('ShopUserPWD', ShopUserPWDSchema)