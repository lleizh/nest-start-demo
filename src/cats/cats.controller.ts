import { CatsService } from './cats.service';
import { Controller, Get, Post } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {

  constructor(private readonly catsService: CatsService){}

  @Post()
  async create() {
    this.catsService.create({
      name: 'string',
      age: 1,
      breed: 'string'}
    )
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll()
  }
}
