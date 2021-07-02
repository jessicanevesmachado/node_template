
import { AppError } from "@errors/AppError";
import express, {Request, Response, NextFunction} from 'express';

// middlewares que manipula error na aplicacao
export function genericError (err:Error, request:Request,response:Response, next: NextFunction){

    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status:"error",
        message: `Internal server error - ${err.message}`,
    })
}

