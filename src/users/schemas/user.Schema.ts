import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Habit } from 'src/habits/interfaces/habits.interfaces';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({
    required: true,
    validate: {
      validator: (value) => /\d/.test(value),
      message: 'El password debe contener al menos un número.',
    },
  })
  password: string;

  @Prop({
    required: true,
    unique: true,
    validate: {
      validator: (value) =>
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value),
      message: 'El Emanil debe tener un formato valido',
    },
  })
  email: string;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Habit' }] })
  habits: Habit[];
}
export const UserSchema = SchemaFactory.createForClass(User);
