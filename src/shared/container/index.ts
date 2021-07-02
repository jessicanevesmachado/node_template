import { IUsersRepository } from "@modules/accounts/infra/interface/IUserRepository";
import { UserRepository } from "@modules/accounts/infra/typeorm/repositories/UserRepository";
import {container} from "tsyringe"

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UserRepository
);

