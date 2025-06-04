import { CanActivate, ExecutionContext } from "@nestjs/common";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Observable } from "rxjs";


export class CreateStudentDto{

    id:number;s
    @IsString()
    name:string;
    @IsEmail()
    email:string;
    @IsString()
    password:string;
}


