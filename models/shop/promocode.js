const {Schema, Types, model} = require('mongoose')

const PromocodeSchema = new Schema({
    shop: {
        _id: { type: Types.ObjectId, required: false},
        name: { type: String, required: false }
    },
    is_global: { type: Boolean, required: true },
    code: { type: String, required: true },
    condition: { type: Object, required: true }
})

module.exports = model('Promocode', PromocodeSchema)