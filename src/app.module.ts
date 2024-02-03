import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { HabitsController } from './habits/habits.controller';
import { HabitsService } from './habits/habits.service';
import { UsersService } from './users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const { MONGO_URI } = process.env;
@Module({
  imports: [MongooseModule.forRoot(MONGO_URI)],
  controllers: [AppController, UsersController, HabitsController],
  providers: [AppService, HabitsService, UsersService],
})
export class AppModule {}
