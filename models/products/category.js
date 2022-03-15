const {Schema, Types, model} = require('mongoose')

const CategorySchema = new Schema({
    title: { type: String, required: true },
    desciption: { type: String, required: true },
    article: { type: Number, required: true },
    translations: { type: Array, required: false },
    options: { type: Array, required: false },
    images: { type: Array, required: false },
    slug: { type: String, required: true },
    deleted: { type: Boolean, required: true },
    visible: { type: Boolean, required: true },
    seo: { type: Object, required: false },
    nesting: { type: Number, required: true },
    order: { type: Number, required: true },
    children: { type: Array, required: false }
})

module.exports = model('Category', CategorySchema)