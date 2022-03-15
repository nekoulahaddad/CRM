const {Schema, Types, model} = require('mongoose')

const OfferSchema = new Schema({
    shop: {
        _id: { type: Types.ObjectId, required: false},
        name: { type: String, required: false }
    },
    product: {
        _id: { type: Types.ObjectId, required: false},
        title: { type: String, required: false }
    },
    delivery_types: { type: Array, required: false },
    price: { type: Number, required: true },
    discount_price: { type: Number, required: true },
    purchase_price: { type: Number, required: true },
    in_stock: { type: Number, required: true },
    recommended: { type: Array, required: false }
})

module.exports = model('Offer', OfferSchema)