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

- The endpoint to get the list of commits of this repostory:
```bash
  Url: localhost:3000/getCommits
  Method: Get
```
The last endpoint return an array of commits from GitHub, like this:
```bash
{
  [
    
    "sha": "f53c8e2587285687ea5d4095eb9f2c2dbf8dd70f",
    "node_id": "C_kwDOJH4Oy9oAKGY1M2M4ZTI1ODcyODU2ODdlYTVkNDA5NWViOWYyYzJkYmY4ZGQ3MGY",
    "commit": {
      "author": {
        "name": "Leonardo Alvarado",
        "email": "ing.leonardo92@gmail.com",
        "date": "2023-03-10T15:47:29Z"
      },
      "committer": {
        "name": "GitHub",
        "email": "noreply@github.com",
        "date": "2023-03-10T15:47:29Z"
      },
      "message": "First Commit, backbone api nestJs",
      "tree": {
        "sha": "c491786dd20000d10629da4b6c2dc13235abca29",
        "url": "https://api.github.com/repos/leonardojap/githubHistoryBackNest/git/trees/c491786dd20000d10629da4b6c2dc13235abca29"
      },
      "url": "https://api.github.com/repos/leonardojap/githubHistoryBackNest/git/commits/f53c8e2587285687ea5d4095eb9f2c2dbf8dd70f",
      "comment_count": 0,
      "verification": {
        "verified": true,
        "reason": "valid",
        "signature": ""
      }
    },
    "url": "https://api.github.com/repos/leonardojap/githubHistoryBackNest/commits/f53c8e2587285687ea5d4095eb9f2c2dbf8dd70f",
    "html_url": "https://github.com/leonardojap/githubHistoryBackNest/commit/f53c8e2587285687ea5d4095eb9f2c2dbf8dd70f",
    "comments_url": "https://api.github.com/repos/leonardojap/githubHistoryBackNest/commits/f53c8e2587285687ea5d4095eb9f2c2dbf8dd70f/comments",
    "author": {
      "login": "leonardojap",
      "id": 8810299,
      "node_id": "MDQ6VXNlcjg4MTAyOTk=",
      "avatar_url": "https://avatars.githubusercontent.com/u/8810299?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/leonardojap",
      "html_url": "https://github.com/leonardojap",
      "followers_url": "https://api.github.com/users/leonardojap/followers",
      "following_url": "https://api.github.com/users/leonardojap/following{/other_user}",
      "gists_url": "https://api.github.com/users/leonardojap/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/leonardojap/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/leonardojap/subscriptions",
      "organizations_url": "https://api.github.com/users/leonardojap/orgs",
      "repos_url": "https://api.github.com/users/leonardojap/repos",
      "events_url": "https://api.github.com/users/leonardojap/events{/privacy}",
      "received_events_url": "https://api.github.com/users/leonardojap/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "web-flow",
      "id": 19864447,
      "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
      "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/web-flow",
      "html_url": "https://github.com/web-flow",
      "followers_url": "https://api.github.com/users/web-flow/followers",
      "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
      "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
      "organizations_url": "https://api.github.com/users/web-flow/orgs",
      "repos_url": "https://api.github.com/users/web-flow/repos",
      "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
      "received_events_url": "https://api.github.com/users/web-flow/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      
    ]
  ],.. 
}
```

## License

Nest is [MIT licensed](LICENSE).
