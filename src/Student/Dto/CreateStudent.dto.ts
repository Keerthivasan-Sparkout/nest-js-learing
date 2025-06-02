import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateStudentDto{

    id:number;s
    @IsString()
    name:string;
    @IsEmail()
    email:string;
    @IsString()
    password:string;
}