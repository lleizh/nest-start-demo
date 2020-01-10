import { CatsService } from "./../cats/cats.service";
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException
} from "@nestjs/common";
import { Request, Response } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly catsService: CatsService) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    console.log(this.catsService);

    response.status(status).json({
      statusCode: status,
      msg: exception.message.message,
      timestamp: new Date().toISOString(),
      path: request.url
    });
  }
}
