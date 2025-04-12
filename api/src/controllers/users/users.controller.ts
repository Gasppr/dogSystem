import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDto } from 'src/dto/user.dto';
import { User } from 'src/entities/user.entity';
import { UsersService } from 'src/services/users/users.service';

@Controller('users')
export class UsersController {
   
  constructor(private userService : UsersService){

  }

  @Get('allUsers')  
  allUsers(){
        return this.userService.getAllUser()
    }
  
  @Get(':name')
  UserByName( @Param('name') name : string){
      return this.userService.searchByName(name);
  }

  @Post('create-user')
  createUser(@Body() userDto : UserDto){

    let user : User = new User();

    user.id = userDto.id
    user.email = userDto.email
    user.name = userDto.name
    user.password = userDto.password
    user.status = userDto.status


    return "Usuário criado com sucesso!"
  }

  @Put()
  updateUserById(){
    return "Alterações no cadastro feitas com sucesso!"
  }

  //Trocar esse decorator Param para @Body
  @Delete(':id')
  deleteUser(@Param('id') id : string){
    //vai desativar o usuário apenas, não apagando do banco de dados

    return "Usuário excluído com sucesso!"
  }


}
