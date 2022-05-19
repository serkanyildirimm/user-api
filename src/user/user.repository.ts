import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findAll(): Promise<User[]> {
    const response = this.userModel.find().exec();
    return response;
  }
  async findOne(id: string): Promise<User> {
    const response = this.userModel.findOne({ uid: id }).exec();
    return response;
  }
  async findByUserName(userName: string): Promise<User> {
    const response = this.userModel.findOne({ userName: userName }).exec();
    return response;
  }
  async create(user: User): Promise<User> {
    const response = new this.userModel(user);
    return response.save();
  }
  async login(user: User): Promise<User> {
    const response = this.userModel
      .findOne({ userName: user.userName, password: user.password })
      .exec();
    return response;
  }
}
