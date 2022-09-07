import { FormikErrors, FormikTouched } from "formik"

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

export interface AuthFormProps {
  errors: FormikErrors<IAuthEntries>
  touched: FormikTouched<IAuthEntries>
}
