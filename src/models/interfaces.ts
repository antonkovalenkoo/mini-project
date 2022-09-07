export interface IArticleDate {
  id: number
  image: string
  title: string
  description: string
  likeCounter: number
  commentCounter: number
  comments: string[]
}

export interface IAuthEntries {
  username: string;
  password: string;
}
