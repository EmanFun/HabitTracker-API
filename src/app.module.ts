import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { HabitsController } from './habits/habits.controller';
import { HabitsService } from './habits/habits.service';
import { UsersService } from './users/users.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, HabitsController],
  providers: [AppService, HabitsService, UsersService],
})
export class AppModule {}
