const {Schema, Types, model} = require('mongoose')

const QASchema = new Schema({
    shop: {
        _id: { type: Types.ObjectId, required: false},
        name: { type: String, required: false }
    },
    question: { type: String, required: true },
    answer: { type: String, required: true },
    order: { type: Number, required: true },
    translations: { type: Array, required: false }
})

module.exports = model('QA', QASchema)