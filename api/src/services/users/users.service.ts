import { Injectable } from '@nestjs/common';
import { UserEntity, Status } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
  private _users: UserEntity[] = [];

  getAllUser(): UserEntity[] {
    return this._users.filter((user : UserEntity) => {

      if(user.status != "Deleted" ){
        return user
      }
    })
  }
   searchByName(name: string){
    let userSearch = this._users.find((user : UserEntity) => user.name === name)

    return {
      resultado : userSearch,
      mensagem: "Usuário encontrado com sucesso"
    };
    
  }

   async createUser(user : UserEntity){
    
    this._users.push(user)

    let userCreated = this._users.find((u : UserEntity) => u.name == user.name)

     return {
        mensagem: "Usuário criado com sucesso!",
        resultado : {nome : userCreated?.name, email: userCreated?.email}
     }
  }

  deleteUser(id: string): string{

    this._users.forEach((user:UserEntity) =>{
        if(user.id == id){
            user.status = Status.Deleted
        }
        return user
    })
    return `Usuário desativado com sucesso!`
  }

  updateUser(id: string, user: UserEntity){
    
    const index = this._users.findIndex(u => u.id === id);

    if (index === -1) {
      return {
        mensagem: "Usuário não encontrado.",
        resultado: null
      };
    }

    this._users[index] = {
      ...this._users[index],
      ...user,               
    };
  

    return  {
      mensagem: "Usuário alterado com sucesso", 
      resultado : this._users[index]
    }
  }
}
