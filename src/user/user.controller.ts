import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  async create(@Body() createUserDto: CreateUserDto) {
    const response = await this.userService.create(createUserDto);
    return response;
  }
  @Get('/findAll')
  async findAll(): Promise<UserDto[]> {
    const response = await this.userService.findAll();
    return response;
  }
  @Get('/getByUid/:uid')
  async findOne(@Param('uid') uid: string): Promise<UserDto> {
    const response = await this.userService.findOne(uid);
    return response;
  }
  @Get('/getByUserName/:userName')
  async findByUserName(@Param('userName') userName: string): Promise<UserDto> {
    const response = await this.userService.findByUserName(userName);
    return response;
  }
  @Post('/login')
  async login(@Body() userLoginDto: UserLoginDto): Promise<UserDto> {
    const response = await this.userService.login(userLoginDto);
    return response;
  }
}
