const {Schema, model} = require ('mongoose')

const schema = new Schema ({
   
    nic: {
        type: String,
        default: 'Unknown'
        
    },
    rev: {
        type: String,
        required: true
    }
}) 



module.exports = model ('review',schema)
