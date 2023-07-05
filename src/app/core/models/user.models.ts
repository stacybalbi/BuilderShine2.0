import { BaseModels } from "./base.models"

export interface User extends BaseModels{
    name: string,
    lastname: string,
    username: string,
    email: string,
    password: string,
    data: {
        access_token: string
    }
}