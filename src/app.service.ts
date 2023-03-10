import { Injectable, ForbiddenException } from "@nestjs/common";

import { HttpService } from "@nestjs/axios"; //to do https request
import { map, catchError, lastValueFrom } from "rxjs";

//to get the config variables (enviroment variables)
import { ConfigService } from "@nestjs/config";

//aour model data to return and get from GitHub API
import { Commit } from "./models/commint/commint";
import { Repository } from "./models/repository/repository";

@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService,
    private readonly http: HttpService
  ) {}

  /**
   *
   * @returns Promise<Commint[]>
   * Here we are going to get the list of conmits from the repository at GitHub
   */
  async getCommitsHistory(): Promise<Commit[]> {
    let commits: Commit[] = []; //we are going to return this array
    await lastValueFrom(
      //http requets to get the commits from the repository at GitHub, with axios
      this.http
        .get(
          `${this.configService.get("GIT_BASE_URL")}${this.configService.get(
            "GIT_USER"
          )}/${this.configService.get("GIT_REPO")}/commits`
        )
        .pipe(
          map(async (response) => {
            commits = response.data;
          })
        )
        .pipe(
          catchError(() => {
            //if we have an error, we are going to throw an exception
            throw new ForbiddenException("Error to get commits");
          })
        )
    );
    return commits;
  }

  getRepositories(): Repository[] {
    //n this case, we have a limited number of repositories, so we are going to return a static array, from model Repository
    let repositories: Repository[] = [];
    let repoBack: Repository = new Repository();
    let repoFront: Repository = new Repository();
    repoBack.name = "githubHistoryBackNest";
    repoFront.name = "githubHistoryFrontAngular";
    repositories.push(repoBack);
    repositories.push(repoFront);
    return repositories;
  }
}

