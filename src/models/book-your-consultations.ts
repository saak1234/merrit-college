import mongoose from 'mongoose';

const BookYourConsultationsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true, 
  }
);

const BookYourConsultations =
  mongoose.models.BookYourConsultations ||
  mongoose.model('BookYourConsultations', BookYourConsultationsSchema);

export default BookYourConsultations;
