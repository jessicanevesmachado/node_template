import { inject, injectable } from "tsyringe";
import bcrypt  from "bcryptjs"
import { AppError } from "@shared/errors/AppError";
import { IUsersRepository } from "@modules/accounts/infra/interface/IUserRepository";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDto";


@injectable()
class CreateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository:IUsersRepository
    ){}

   async execute({name,email,password}:ICreateUserDTO):Promise<void>{

       const userAlreadyExists = await this.usersRepository.findByEmail(email);

       if(userAlreadyExists){
           throw new AppError("User already exists");
       }

       const passwordHash =  await bcrypt.hash(password,8); 

        await this.usersRepository.create({
            name,
            email,
            password: passwordHash, 
        })

    }
}

export {CreateUserUseCase}