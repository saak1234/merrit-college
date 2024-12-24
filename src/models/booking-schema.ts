import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
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
    programInterest: { 
        type: String, 
        required: true,
    },
    additionalNotes: { 
        type: String
    }
}, {
    timestamps: true
});

const Booking = mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
export default Booking;
