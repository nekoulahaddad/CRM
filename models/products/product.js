const {Schema, Types, model} = require('mongoose')

const ProductSchema = new Schema({
    title: { type: String, required: true },
    desciption: { type: String, required: true },
    article: { type: Number, required: true },
    translations: { type: Array, required: false },
    brand: {
        _id: { type: Types.ObjectId},
        value: { type: String }
    },
    options: { type: Array, required: false },
    coef: { type: Number, required: true },
    images: { type: Array, required: false },
    deleted: { type: Boolean, required: true },
    on_sale: { type: Boolean, required: true },
    visible: { type: Boolean, required: true },
    counter: { type: Number, required: true },
    discount_price: { type: Number, required: true },
    purchase_price: { type: Number, required: true },
    group_id: { type: Types.ObjectId, required: false },
    category_id: { type: Types.ObjectId, required: true },
})

module.exports = model('Product', ProductSchema)