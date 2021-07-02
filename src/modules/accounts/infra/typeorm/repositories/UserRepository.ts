import { ICreateUserDTO } from "modules/accounts/dtos/ICreateUserDto";
import { getRepository, Repository } from "typeorm";
import {v4 as uuidV4} from 'uuid'
import { IUsersRepository } from "../../interface/IUserRepository";
import Users from "../entities/User";
 

class UserRepository implements IUsersRepository{

    private repository: Repository<Users>;

    constructor(){
        this.repository = getRepository(Users);
    }

   async findByid(id: string): Promise<Users> {

        const user = await this.repository.findOne(id);
        return user;
   }

    async findByEmail(email: string): Promise<Users> {
        const user = await this.repository.findOne({email});
        return user;
    }

   async create({name, email,password,id}: ICreateUserDTO): Promise<void> {

        if(!id){
             id = uuidV4();
        }
        
        const user = this.repository.create({
            id,
            name, 
            email,  
            password, 
        });

        await this.repository.save(user);
    } 
}

export {UserRepository}