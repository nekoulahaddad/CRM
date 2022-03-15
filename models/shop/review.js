const {Schema, Types, model} = require('mongoose')

const ReviewSchema = new Schema({
    shop: {
        _id: { type: Types.ObjectId, required: false},
        name: { type: String, required: false }
    },
    customer: {
        _id: { type: Types.ObjectId, required: false},
        title: { type: String, required: false }
    },
    manager: {
        _id: { type: Types.ObjectId, required: false},
        title: { type: String, required: false }
    },
    text: { type: String, required: false },
    comment: { type: String, required: false },
})

module.exports = model('Review', ReviewSchema)