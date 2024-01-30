import { Test, TestingModule } from '@nestjs/testing';
import { HabitsController } from './habits.controller';

describe('HabitsController', () => {
  let habitsController: HabitsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HabitsController],
      providers: [],
    }).compile();
    habitsController = app.get<HabitsController>(HabitsController);
  });

  describe('root', () => {
    it('should return somethings', () => {
      expect(habitsController).toBe('');
    });
  });
});
