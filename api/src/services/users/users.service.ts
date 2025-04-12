import { Injectable } from '@nestjs/common';
import { User, Status } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
  users: User[];

  getAllUser(): User[] {
    return this.users
  }
   searchByName(name: string){
    let userSearch = this.users.find((user : User) => user.name === name)

    return userSearch;
    
  }

  createUser(user : User){
    this.users.push(user);

    let userCreated = this.users.find((u : User) => u.name == user.name)

    return `Usuário ${userCreated?.name} criado com sucesso! `
  }

  deleteUser(id: string): string{

   let user = this.users.forEach((user:User) =>{
        if(user.id == id){
            user.status = Status.Deleted
        }
        return user
    })
    return `Usuário ${user} desativado com sucesso!`
  }
}
