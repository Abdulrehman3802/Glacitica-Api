const mongoose = require('mongoose')
const createschema = new mongoose.Schema({
    brandname: {
        type: String
    },
    industry: {
        type: String

    },
    description: {
        type: String

    },
    website: {

        type: String,
        default: 'https://www.google.com/'
    },
    image: {
        data: Buffer,
        contentType: String
    }
})

const create = mongoose.model('create', createschema)

module.exports = create