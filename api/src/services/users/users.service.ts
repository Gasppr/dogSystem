import { Injectable } from '@nestjs/common';
import { UserEntity, Status } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
  private _users: UserEntity[] = [];

  getAllUser(): UserEntity[] {
    return this._users
  }
   searchByName(name: string){
    let userSearch = this._users.find((user : UserEntity) => user.name === name)

    return userSearch;
    
  }

   async createUser(user : UserEntity){
    
    this._users.push(user)

    let userCreated = this._users.find((u : UserEntity) => u.name == user.name)

     return `Usuário ${userCreated?.name} criado com sucesso! `
  }

  deleteUser(id: string): string{

   let user = this._users.forEach((user:UserEntity) =>{
        if(user.id == id){
            user.status = Status.Deleted
        }
        return user
    })
    return `Usuário ${user} desativado com sucesso!`
  }
}
