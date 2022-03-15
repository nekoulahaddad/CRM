const {Schema, Types, model} = require('mongoose')

const BrandSchema = new Schema({
    title: { type: String, required: true },
    desciption: { type: String, required: true },
    translations: { type: Array, required: false },
    images: { type: Array, required: false },
    slug: { type: String, required: true }
})

module.exports = model('Brand', BrandSchema)