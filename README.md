<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


## Description

This is a backend, with services thar provide dta from GitHub API, about the commits history in a proyect. [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository

## Requirement to run
- You must have intalled Node Js, 16.13.2 or higher
- Install Cli of NestJs in your local machine:

```bash
$ npm i -g @nestjs/cli
```

## Installation

```bash
$ git clone https://github.com/leonardojap/githubHistoryBackNest.git
$ cd githubHistoryBackNest/
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Endpoints

- Once you have run the proyect, you can aopen your browser, and access to the url: 
```bash
localhost:3000
```

- The endpind to get the list of commits of this repostory:
```bash
  Url: localhost:3000/getCommits
  Method: Get
```


## License

Nest is [MIT licensed](LICENSE).
