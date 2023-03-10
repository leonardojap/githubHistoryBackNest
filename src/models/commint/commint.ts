// Description: Commint model, this model is used to return the list of commits from the repository, based on the model that return the API of github
//this is the basic data that we neet to use in the backend and frontend, we know the model from GitHub API is more complex, but we are going to use only this data
export class Commit {
  sha: string;
  node_id: string;
  commit: {
    message: string;
    author: AuthorMinusDate;
  };
  author: Author;
}

export class AuthorMinusDate {
  name: string;
  email: string;
  date: string;
}

export class Author {
  id: number;
  avatar_url: string;
}
