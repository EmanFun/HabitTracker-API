import { Injectable } from '@nestjs/common';
import { Habit } from 'src/habits/interfaces/habits.interfaces';

@Injectable()
export class HabitsService {
  private readonly habits: Habit[] = [];
  create(habit: Habit) {
    this.habits.push(habit);
  }
  findAll(): Habit[] {
    return this.habits;
  }
}
