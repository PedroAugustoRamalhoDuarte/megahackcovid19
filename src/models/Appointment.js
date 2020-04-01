const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new mongoose.Schema({
    date: Date,
    doctor: {type: Schema.Types.ObjectId, ref: 'User'},
    patient: {type: Schema.Types.ObjectId, ref: 'User'},
    prescriptions: [{type: Schema.Types.ObjectId, ref: 'Prescription'}]
});

module.exports = mongoose.model('Appointment', AppointmentSchema);