const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    course: { type: String, required: true },
}, {
    timestamps: true
});


const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
export default Contact;
