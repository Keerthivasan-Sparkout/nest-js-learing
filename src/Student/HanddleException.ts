import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { timeStamp } from "console";
import path from "path";

@Catch(HttpException)
export class SampleException implements ExceptionFilter{
    catch(exception: any, host: ArgumentsHost) {
       const context= host.switchToHttp();
       const request=context.getRequest();
       const response =context.getResponse();
       const status_Code =HttpStatus.FORBIDDEN;

       response.status(status_Code)
       .json({
        statusCode:status_Code,
        timeStamp:new Date().toISOString,
        path :request.URL

       })
    }

    
}