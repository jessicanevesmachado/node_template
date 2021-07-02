import { CreateUserController } from '@modules/accounts/useCases/createUser/CreateUserController';
import {Router,Response, Request} from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createUserController = new CreateUserController();
const usersRoutes = Router();

usersRoutes.get('/',async(request:Request, response:Response) => {
    console.log('Acessou url ');
    response.send("Acessou!!");
})

usersRoutes.post('/',ensureAuthenticated,createUserController.handle)

export {usersRoutes}