import { RolesGuard } from "./../guard/roles.guard";
import { ParseIntPipe } from "./../pipe/parse-int.pipe";
import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  UseGuards,
  SetMetadata
} from "@nestjs/common";
import { ForbiddenException } from "./../exception/forbidden.exception";
import { CatsService } from "./cats.service";
import { CreateCatDto } from "./dto/create-cat.dto";
import { Cat } from "./interfaces/cat.interface";
import { Roles } from "src/guard/roles.decorator";

@Controller("cats")
@UseGuards(RolesGuard)
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
  @Roles("admin1", "user")
  async findAll(): Promise<Cat[]> {
    console.log(this.catsService);
    return this.catsService.findAll();
  }

  @Get(":id")
  exp(@Param("id", ParseIntPipe) id) {
    console.log(typeof id);
    // throw new HttpException("Forbidden", HttpStatus.FORBIDDEN);

    // throw new HttpException({
    //   status: HttpStatus.FORBIDDEN,
    //   error: 'This is a custom message',
    // }, 403);

    throw new ForbiddenException();
  }
}
