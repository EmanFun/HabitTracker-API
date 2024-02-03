import { Body, Controller, Param, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/user.dto';

@Controller('users')
export class UsersController {
  @Get(':id')
  log(@Param('id') id: string): string {
    return `this action return a ${id} user`;
  }
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }
}
