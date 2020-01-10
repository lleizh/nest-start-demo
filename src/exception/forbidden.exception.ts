import { HttpStatus } from "@nestjs/common";
import { HttpException } from "@nestjs/common";
export class ForbiddenException extends HttpException {
  constructor() {
    super("Forbidden", HttpStatus.FORBIDDEN);
  }
}
