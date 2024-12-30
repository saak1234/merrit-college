import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    message: { type: String , required: false },
}, {
    timestamps: true
});


const ApContact = mongoose.models.ApContact || mongoose.model('ApContact', ContactSchema);
export default ApContact;
