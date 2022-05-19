import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema({ versionKey: false, collection: 'user' })
export class User {
  @Prop()
  uid: string;
  @Prop()
  name: string;
  @Prop()
  surname: string;
  @Prop()
  userName: string;
  @Prop()
  password: string;
  @Prop()
  email: string;
  @Prop()
  phoneNumber: string;
  @Prop()
  createdDate: Date;
  @Prop()
  updatedDate: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
