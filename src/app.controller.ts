import { Controller, Get, HttpCode, Param } from "@nestjs/common";
import { AppService } from "./app.service";
import { Commit } from "./models/commint/commint";
import { Repository } from "./models/repository/repository";

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
  @Get("getCommits/:repository")
  @HttpCode(200)
  getCommits(@Param("repository") repository): Promise<Commit[]> {
    return this.appService.getCommitsHistory(repository);
  }

  /**
   * @returns Promise<Branch[]>
   * Here we are going to get the list of branches from the repository
   */
  @Get("getRepositories")
  @HttpCode(200)
  getBranches(): Repository[] {
    return this.appService.getRepositories();
  }
}
