const {Schema, Types, model} = require('mongoose')

const ShopCatalogSchema = new Schema({
    name: { type: String, required: false },
    catalog: { type: Array, required: true }
})

module.exports = model('ShopCatalog', ShopCatalogSchema)