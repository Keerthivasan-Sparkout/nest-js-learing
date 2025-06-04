import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Student } from "./Student.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateStudentDto } from "./Dto/CreateStudent.dto";

@Injectable()
export class StudentService{

    public constructor(
        @InjectRepository(Student)
        private studentRepository:Repository<Student>){}

    /**
     * 
     * @param id Fetching particular student object from Database using student Id 
     * @returns fetched student object Return back to controller 
     */
    getStudent(id:number){
        return this.studentRepository.findOne({where : {id}} );
    }

    /**
     * 
     * @param createStudentDto It filter and validate with CreateStudentDto the required data from the URL 
     * @returns Save the student object in Database 
     */
    saveStudent(createStudentDto:CreateStudentDto ){
        return this.studentRepository.save(createStudentDto);
    }

    
    updateStudent(id:number,createStudentDto:CreateStudentDto){
        return this.studentRepository.update(id,createStudentDto);
    }

    deleteStudent( id:number){
        return this.studentRepository.delete(id);
    }

}