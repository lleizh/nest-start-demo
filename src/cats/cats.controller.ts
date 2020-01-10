import { HttpExceptionFilter } from './../filter/http-exception.filter';
import { ForbiddenException } from './../exception/forbidden.exception';
import { CreateCatDto } from "./dto/create-cat.dto";
import { CatsService } from "./cats.service";
import {
  Controller,
  Post,
  Body,
  Get,
  HttpException,
  HttpStatus,
  UseFilters
} from "@nestjs/common";
import { Cat } from "./interfaces/cat.interface";

@Controller("cats")
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create({
      name: "string",
      age: 1,
      breed: "string"
    });
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    console.log(this.catsService)
    return this.catsService.findAll();
  }

  @Get(":id")
  exp() {

    // throw new HttpException("Forbidden", HttpStatus.FORBIDDEN);

    // throw new HttpException({
    //   status: HttpStatus.FORBIDDEN,
    //   error: 'This is a custom message',
    // }, 403);

    throw new ForbiddenException();
  }
}
