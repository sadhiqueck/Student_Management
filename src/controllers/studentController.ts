import { Request,Response } from "express";
import { IStudentService } from "../services/IStudentService";

export class StudentController {
    private studentService: IStudentService;

    constructor(studentService: IStudentService) {
        this.studentService = studentService;
    }

    async getStudents(req: Request, res: Response): Promise<void> {
        try{
            const students= await this.studentService.getStudents();
            res.render("index", { students });
        }catch (error) {
            console.error("Error fetching students:", error);
            res.status(500).send("Internal Server Error");
        }
    }

    async createStudent(req: Request, res: Response): Promise<void> {
        try{
            const studentData = req.body;
            const newStudent = await this.studentService.createStudent(studentData);
            res.status(201).json(newStudent);
        }catch (error) {
            console.error("Error creating student:", error);
            res.status(500).send("Internal Server Error");
        }
    }

    async updateStudent(req: Request, res: Response): Promise<void> {
        try{
           const studentId = req.params.id;
           const studentData = req.body;
            const updatedStudent = await this.studentService.updateStudent(studentId, studentData);
            if (!updatedStudent) {
            res.status(404).send("Student not found");
            return;
            }
            res.status(200).json(updatedStudent);
        }catch (error) {
            console.error("Error updating student:", error);
            res.status(500).send("Internal Server Error");
        }
    }

    async deleteStudent(req: Request, res: Response): Promise<void> {
        try{
            const studentId = req.params.id;
            await this.studentService.deleteStudent(studentId);
            res.status(204).send();
        }catch (error) {
            console.error("Error deleting student:", error);
            res.status(500).send("Internal Server Error");
        }
    }

}
