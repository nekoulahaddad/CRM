const {Schema, Types, model} = require('mongoose')

const regionSchema = new Schema({
    value: { type: String, required: true },
    title: { type: String, required: true },
    translations: { type: Array, required: true },
    country: {
        _id: { type: Types.ObjectId, required: true },
        value: { type: String, required: true }
    }
})

module.exports = model('Region', regionSchema)