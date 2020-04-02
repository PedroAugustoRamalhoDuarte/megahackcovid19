let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PrescriptionSchema = new Schema({
    token: {type: String, required: true},
    description: {type: String, required: true},
    drugs: [{type: Schema.Types.ObjectId, ref: 'Drug'}]
});


// Export the model
module.exports = mongoose.model('Prescription', PrescriptionSchema);