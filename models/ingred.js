const {Schema, model} = require ('mongoose')

const schema = new Schema ({
   
    title: {
        type: String,
        required: true
    },
    flag: {
        type: Boolean,
        default: false
        
    },
    cost: {
        type: Number,
        required: true
    },
    entry:{
        type: Boolean,
        default: false
    }
}) 

module.exports = model ('ingredients',schema)