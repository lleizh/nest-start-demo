import { CreateCatDto } from "./dto/create-cat.dto";
import { CatsService } from "./cats.service";
import { Controller, Post, Body, Get } from "@nestjs/common";
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
    return this.catsService.findAll();
  }
}
