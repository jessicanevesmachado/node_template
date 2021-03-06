import {v4 as uuidV4} from 'uuid'
import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm"

@Entity("users")
class Users{

    @PrimaryColumn() 
    id:string;
    
    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @Column()
    isAdmin:boolean;

    @CreateDateColumn()
    created_at:Date;

    constructor(){
        if(!this.id) // se nao tiver nenhum id
        {
            this.id = uuidV4();
        }
    }
}

export default Users;