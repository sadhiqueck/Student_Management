
import mongoose, {Document, Schema} from 'mongoose';

export interface IStudent extends Document {
name: string;
age: number;
course: string;
} 

const StudentSchema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true }, 
  course: { type: String, required: true }
}, {
  timestamps: true 
});

export const Student = mongoose.model<IStudent>('Student', StudentSchema);

