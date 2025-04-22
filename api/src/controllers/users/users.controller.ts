import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDto } from 'src/dto/user.dto';
import { UserEntity } from 'src/entities/user.entity';
import { UsersService } from 'src/services/users/users.service';

@Controller('users')
export class UsersController {
   
  constructor(private userService : UsersService){

  }

  @Get('allusers')  
  allUsers(){
        return this.userService.getAllUser()
    }
  
  @Get(':name')
  UserByName( @Param('name') name : string){
      return this.userService.searchByName(name);
  }

  @Post('create-user')
  async createUser(@Body() userDto : UserDto){
    let user : UserEntity;
    user = {
      id: userDto.id,
      name: userDto.name,
      email: userDto.email,
      password: userDto.password,
      status: userDto.status
    };
    
    return await this.userService.createUser(user)
  }

  @Put('/:id')
  updateUserById(@Param('id') id : string , @Body() userDto : UserDto){

    let user : UserEntity = {
      id: userDto.id,
      name: userDto.name,
      email: userDto.email,
      password: userDto.password,
      status: userDto.status
    }
    return this.userService.updateUser(id , user )
  }

  //Trocar esse decorator Param para @Body
  @Delete(':id')
  deleteUser(@Param('id') id : string){
    //vai desativar o usuário apenas, não apagando do banco de dados
    return this.userService.deleteUser(id);
  }


}
