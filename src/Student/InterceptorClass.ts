import { CallHandler, CanActivate, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { catchError, Observable, tap, throwError } from "rxjs";

@Injectable()
export class StudentInterceptor implements  NestInterceptor{

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        
        /**
         * It execute before the controller
         */
           const request= context.switchToHttp().getRequest();
            

        return next.handle().pipe(
            tap(()=>{
                // console.log(new Date().toISOString());
            }
            )
        ,catchError(err => {
           return throwError(() => err)
        })
    )
    }

}