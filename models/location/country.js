const {Schema, Types, model} = require('mongoose')

const countrySchema = new Schema({
    value: { type: String, required: true },
    title: { type: String, required: true },
    translations: { type: Array, required: true },
    valute: {
        code: { type: String, required: true },
        ISO: { type: String, required: true },
        title: { type: String, required: true },
        icon: { type: String, required: true }
    }
})

module.exports = model('Country', countrySchema)