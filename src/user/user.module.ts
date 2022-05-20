import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: User.name, schema: UserSchema }],
      'user-connection',
    ),
  ],
  exports: [UserRepository, UserService],
  providers: [UserService, UserRepository],
  controllers: [UserController],
})
export class UserModule {}
