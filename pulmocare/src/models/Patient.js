import { Schema, model } from 'mongoose';
const patientSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      required: true
    },
    medical_history: {
      type: String
    } ,
     status: {
      type: Boolean,
      default: true
    },
  });

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;