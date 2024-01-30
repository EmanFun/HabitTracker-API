import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { HabitsController } from './habits/habits.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, HabitsController],
  providers: [AppService],
})
export class AppModule {}
