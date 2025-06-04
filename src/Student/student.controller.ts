import {  Body , Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req, UseFilters, UseInterceptors } from "@nestjs/common";
import { StudentService } from "./student.service";
import { CreateStudentDto } from "./Dto/CreateStudent.dto";
import { SampleException } from "./HanddleException";
import { StudentInterceptor } from "./InterceptorClass";
import { UniqueId } from "./Dto/IdDecorator";

@Controller("/student")
@UseFilters(SampleException)
@UseInterceptors(StudentInterceptor)
export class StudentController{

    public constructor(private studentService:StudentService){}

    @Get()
    get(){
        console.log("Hel");
        return "Hello..."
    }
    
    @Get("/:id")
    
    getStudent(@Param('id' ,ParseIntPipe) id:number){
        
        return this.studentService.getStudent(id);
    }

    @Post("")
    saveStudent(@Body() createStudentDto:CreateStudentDto){
        return this.studentService.saveStudent(createStudentDto);
    }

    @Patch("")
    updateStudent(@Body() CreateStudentDto:CreateStudentDto, @UniqueId() id:number){
        return this.studentService.updateStudent(id,CreateStudentDto);
    }

    @Delete("/:id")
    deleteStudent(@Param( 'id' ,ParseIntPipe) id:number){
        return this.studentService.deleteStudent(id);
    }
}