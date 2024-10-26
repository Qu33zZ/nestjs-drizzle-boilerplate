import { Provider } from '@nestjs/common';
import { ICarsRepository } from '@shared/interfaces/repositories';
import { CarsRepository } from './cars.repo';

export const CARS_REPOSITORY_PROVIDER: Provider = {
  provide: ICarsRepository,
  useClass: CarsRepository,
};
