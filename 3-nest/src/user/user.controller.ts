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
  deleteUser(@Param("id") id:string) {
    return this.userService.deleteUser(id);
  }

  @Get('/:id')
  getOne(@Param("id") id:string) {
    return this.userService.getOne(id);
  }


  @Put('/:id')
  replaceValuePut(@Param("id") id:string, @Body() body: any) {
    return this.userService.replaceValuePut(id,body);
  }


  @Post('/register')
  register(@Body() body: any) {
    return this.userService.register(body);
  }


  @Patch("/:id")
 replaceValuePatch(@Body() body:any, @Param("id") id:string){
    return this.userService.replaceValuePatch(body,id);
  }

  @Post("/login")
  login(@Body("email") email:string , @Body("password") password:string){
      return this.userService.login(email,password);
  }

  @Get('/search/:id')
  searchUser(@Param("id")id:string){
    return this.userService.searchUser(id);
  }
  
}
