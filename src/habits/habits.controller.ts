import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateHabitDto } from 'src/habits/dto/habits.dto';
import { HabitsService } from './habits.service';
import { Habit } from 'src/habits/interfaces/habits.interfaces';
@Controller('habits')
export class HabitsController {
  constructor(private habitsService: HabitsService) {}

  @Get()
  findAll(): Habit[] {
    return this.habitsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `this action return a #${id} habits `;
  }

  @Post()
  async create(@Body() createHabitDto: CreateHabitDto) {
    this.habitsService.create(createHabitDto);
  }
}
