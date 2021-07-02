import { IUsersRepository } from "@modules/accounts/infra/interface/IUserRepository";
import { AppError } from "@shared/errors/AppError";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";


interface IRequest {
    email:string
    password:string
} 

interface IResponse {
   
    user:{
        name:string;
        email:string;
    },
    token:string;
}

@injectable()
class AuthenticateUserCase {

    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ){}

    async execute({email,password}:IRequest) :Promise<IResponse> {

        // usuario existe
        const user = await this.userRepository.findByEmail(email);

        if(!user){
            throw new AppError("Email or Password is incorrect");
        }

        // senha esta correta
        const passwordMacth = await compare(password,user.password)

        if(!passwordMacth){
            throw new AppError("Email or Password is incorrect");
        }
        
        // gerar json webtoken
        const token = sign({}, process.env.JWTHash,{
            subject:user.id,
            expiresIn: "1d"
        });    
        
        
        const response:IResponse = {
            user:{
              name:user.name,
              email:user.email  
            },
            token
        }

        return response;


    }
}

export {AuthenticateUserCase}
