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

    getStudent(id:number){
        
        return this.studentRepository.findOne({where : {id}} );
    }

    saveStudent(createStudentDto:CreateStudentDto ){
        return this.studentRepository.save(createStudentDto);
    }

    updateStudent(createStudentDto:CreateStudentDto){
        return this.studentRepository.update(createStudentDto.id,createStudentDto);
    }

    deleteStudent( id:number){
        return this.studentRepository.delete(id);
    }

}