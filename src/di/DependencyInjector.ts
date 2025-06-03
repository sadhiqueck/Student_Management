import {StudentsService} from '../services/StudentsServices';  
import { StudentController } from '../controllers/studentController';

export class DependencyInjector {
  private static studentService: StudentsService = new StudentsService();
  private static studentController: StudentController = new StudentController(DependencyInjector.studentService); 

  public static getStudentController(): StudentController {
    return DependencyInjector.studentController;
  }
}