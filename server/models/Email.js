let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let DrugSchema = new Schema({
    to: { type: String, required: true },
    from: { type: String, required: true },
    subject: { type: String, required: true },
    text: { type: String, required: true }
});


// Export the model
module.exports = mongoose.model('Email', DrugSchema);