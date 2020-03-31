let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let DrugSchema = new Schema({
    name: {type: String, required: true, max: 100},
    type: {type: String, required: true},
    description: {type: String, required: true}
});


// Export the model
module.exports = mongoose.model('Drug', DrugSchema);