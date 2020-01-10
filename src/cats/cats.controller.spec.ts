import { CatsService } from "./cats.service";
import { Test, TestingModule } from "@nestjs/testing";
import { CatsController } from "./cats.controller";

describe("Cats Controller", () => {
  let controller: CatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService],
      controllers: [CatsController]
    }).compile();

    controller = module.get<CatsController>(CatsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
