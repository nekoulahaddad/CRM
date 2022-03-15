const {Schema, Types, model} = require('mongoose')

const TariffSchema = new Schema({
    admin_id: { type: Types.ObjectId},
    type: { type: String, required: true },
    title: { type: String, required: true },
    translations: { type: Array, required: true },
    prices: { type: Array, required: false, default: [] },
    region: { type: Types.ObjectId, required: false},
})

module.exports = model('Tariff', TariffSchema)