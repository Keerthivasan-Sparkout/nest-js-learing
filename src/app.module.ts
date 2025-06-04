import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './Student/Student.entity';
import { studentModule } from './Student/student.module';
import { Logger } from './Student/LoggerMiddleware';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { StudentInterceptor } from './Student/InterceptorClass';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nestjs',
      entities: [Student],
      synchronize: true,
    }), 
    studentModule],
  controllers: [AppController,],
  providers: [AppService , {
      provide: APP_INTERCEPTOR,
      useClass: StudentInterceptor,
    }] 
,
})
export class AppModule implements NestModule{

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Logger)
    .forRoutes("/student");
  }

}
