import { Controller, Get, HttpCode } from "@nestjs/common";
import { AppService } from "./app.service";
import { Commit } from "./models/commint/commint";

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  //This is the default route, a simple welcome message
  @Get()
  @HttpCode(200)
  getHello(): string {
    return "Git history proyect";
  }

  /**
   *
   * @returns Promise<Commint[]>
   * Here we are going to get the list of conmits from the repository
   */
  @Get("getCommits")
  @HttpCode(200)
  getBranches(): Promise<Commit[]> {
    return this.appService.getCommitsHistory();
  }
}
