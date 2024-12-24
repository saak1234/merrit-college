import mongoose from 'mongoose';

const ConsultationsSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true,
    },
    phone: { 
        type: String, 
        required: true,
    },
    preferredDate: { 
        type: Date, 
        required: true 
    },
    preferredTime: { 
        type: String, 
        required: true 
    },
}, {
    timestamps: true
});

const Consultations = mongoose.models.Consultations || mongoose.model('Consultations', ConsultationsSchema);
export default Consultations;
