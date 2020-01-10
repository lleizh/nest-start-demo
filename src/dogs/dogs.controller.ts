import { Controller, Get } from "@nestjs/common";

@Controller("dogs")
export class DogsController {
  
  @Get()
  index() {
    return "dogs";
  }
}
