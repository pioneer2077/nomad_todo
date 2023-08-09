export interface IFormData {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  checkPassword: string;
  extraError?: string;
}

export interface IForm {
  toDo: string;
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}
