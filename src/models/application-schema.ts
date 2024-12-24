import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    parentName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    course: { type: String, required: true },
    education: { type: String, required: true }
}, {
    timestamps: true
});


const Application = mongoose.models.Application || mongoose.model('Application', applicationSchema);
export default Application;
