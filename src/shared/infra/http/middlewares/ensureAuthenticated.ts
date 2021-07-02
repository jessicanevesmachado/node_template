import { UserRepository } from "@modules/accounts/infra/typeorm/repositories/UserRepository";
import { AppError } from "@errors/AppError";
import { NextFunction, Request, Response} from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub:string;
}

export async function ensureAuthenticated(request: Request, response:Response, next:NextFunction) {

    const authHeader = request.headers.authorization;
 console.log('teste');
    // se nao tiver nada no meu authHeader
    if(!authHeader){
        throw new AppError("Token missing",401);
    }

    const [, token] = authHeader.split(" "); 

    try {

        const {sub: user_id} = verify(token,process.env.JWTHash) as IPayload;
        //console.log(user_id);

        const userRepository = new UserRepository();
        const user = userRepository.findByid(user_id);

        if(!user){
            throw new AppError("User does not exists!",401);
        }

        request.user = {
            id:user_id
        }
        
        next();
         
     } catch (error) {

         throw new AppError("Ivalid Token!",401);
     }
 
}