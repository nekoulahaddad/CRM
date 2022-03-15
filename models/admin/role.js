const {Schema, Types, model} = require('mongoose')

const AdminRoleSchema = new Schema({
    value: { type: String, required: true },
    title: { type: String, required: true },
    translations: { type: Array, required: true }
})

module.exports = model('AdminRole', AdminRoleSchema)