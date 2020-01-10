import { Body, Controller, Get, Post } from "@nestjs/common";
import { ForbiddenException } from "./../exception/forbidden.exception";
import { CatsService } from "./cats.service";
import { CreateCatDto } from "./dto/create-cat.dto";
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
    console.log(this.catsService);
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
