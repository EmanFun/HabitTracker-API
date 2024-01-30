import { Body, Controller, Param, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/utils/habits.dto';

@Controller('users')
export class UsersController {
  @Get(':id')
  log(@Param('id') id: string): string {
    return `this action return a ${id} user`;
  }
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return 'this action adds a new user';
  }
}
