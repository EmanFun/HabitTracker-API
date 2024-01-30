import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateHabitDto } from 'src/utils/habits.dto';

@Controller('habits')
export class HabitsController {
  @Get()
  findAll(): string[] {
    return ['this action returns all habits'];
  }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `this action return a #${id} habits `;
  }

  @Post()
  async create(@Body() createHabitDto: CreateHabitDto) {
    return 'this actions adds a new cat';
  }
}
