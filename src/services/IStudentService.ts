import {IStudent} from '../models/student_model';

export interface IStudentService {
    getStudents():Promise<IStudent[]>;
    createStudent(studentData: IStudent):Promise<IStudent>;
    updateStudent(id: string,studentData: Partial<IStudent>):Promise<IStudent | null>;
    deleteStudent(id: string):Promise<void>;
}