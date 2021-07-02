import { ICreateUserDTO } from "modules/accounts/dtos/ICreateUserDto";
import Users from "../typeorm/entities/User";

interface IUsersRepository{
    create(data: ICreateUserDTO): Promise<void>;
    findByEmail(email:string): Promise<Users>;
    findByid(id:string) : Promise<Users>
}

export {IUsersRepository}