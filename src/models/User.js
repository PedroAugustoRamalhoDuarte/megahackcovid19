const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    role: {
        type: String,
        default: 'client',
        enum: ['client', 'doctor', 'drugstore']
    },
    crm: String,
});

module.exports = mongoose.model('User', UserSchema);