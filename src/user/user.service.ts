import { User } from './schema/user.schema';
import { UserRepository } from './user.repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { randomUUID } from 'crypto';
import { UserDto } from './dto/user.dto';
import { UserLoginDto } from './dto/user-login.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    const user: User = new User();
    user.name = createUserDto.name;
    user.surname = createUserDto.surname;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    user.phoneNumber = createUserDto.phoneNumber;
    user.userName = createUserDto.userName;
    user.createdDate = new Date();
    user.uid = randomUUID();
    const response = await this.userRepository.create(user);
    return response;
  }

  async findAll(): Promise<UserDto[]> {
    const response = await this.userRepository.findAll();
    return response;
  }

  async findOne(uid: string): Promise<UserDto> {
    const response = await this.userRepository.findOne(uid);
    return response;
  }
  async findByUserName(userName: string): Promise<UserDto> {
    const response = await this.userRepository.findByUserName(userName);
    return response;
  }
  async login(userLoginDto: UserLoginDto): Promise<UserDto> {
    const { userName, password } = userLoginDto;
    if (!userName || !password) {
      throw new HttpException(
        'kullanici adiniz veya parolaniz hatali...',
        HttpStatus.NOT_FOUND,
      );
    }
    const user: User = new User();
    user.userName = userName;
    user.password = password;
    const response = await this.userRepository.login(user);
    return response;
  }
}
