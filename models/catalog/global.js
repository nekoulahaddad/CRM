const {Schema, Types, model} = require('mongoose')

const GlobalCatalogSchema = new Schema({
    catalog: { type: Array, required: true }
})

module.exports = model('GlobalCatalog', GlobalCatalogSchema)