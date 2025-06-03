import { Student,IStudent } from "../models/student_model";
import { IStudentService } from "./IStudentService";

export class StudentsService implements IStudentService {
    
    async getStudents(): Promise<IStudent[]> {
       return  await Student.find()
    }
    async createStudent(studentData: IStudent): Promise<IStudent> {
        const student = new Student(studentData);
        return student.save();  
    }

    async updateStudent(id: string, studentData: Partial<IStudent>): Promise<IStudent | null> {
        const student=await Student.findByIdAndUpdate(id, studentData, {new: true});
        if(!student) {
            throw new Error("Student not found");
        } 
        return student;  
    }
    
    async deleteStudent(id: string): Promise<void> {
        const student = await Student.findByIdAndDelete(id);
        if (!student) {
            throw new Error("Student not found");
        }   
    }
}