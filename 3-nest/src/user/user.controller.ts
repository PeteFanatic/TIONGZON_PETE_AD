import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

  @Get("/all")
  getAll(){
      return this.userService.getAll();
  }

  @Delete('/:id')
  deleteUser(@Param("id") id:number) {
    return this.userService.deleteUser(id);
  }

  @Get('/:id')
  getOne(@Param("id") id:number) {
    return this.userService.getUser(id);
  }

  @Put('/replaceUser/:id')
  replaceUser(@Param("id") id:number, @Body() body: any) {
    return this.userService.replaceUser(id,body);
  }

  @Post('/register')
  registerUser(@Body() body: any) {
    return this.userService.registerUser(body);
  }

  @Patch("/replaceUser/:id")
  register(@Body() body:any, @Param("id") id:number){
    return this.userService.replaceUser(id,body);
  }

  @Post("/login")
  loginUser(@Body("email") email:string , @Body("password") password:string){
      return this.userService.loginUser(email,password);
  }

  @Get('/search/:id')
  searchUser(@Param("id")id:number){
    return this.userService.searchUser(id);
  }

  @Get('/logUser')
  logUser() {
    return this.userService.logAllUser();
    // return;
  }
  //@Get('/user/:all')
  
}
