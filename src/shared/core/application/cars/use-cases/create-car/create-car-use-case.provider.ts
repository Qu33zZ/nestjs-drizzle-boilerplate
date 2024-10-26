import { Provider } from '@nestjs/common';
import { ICreateCarUseCase } from '@interfaces/use-cases/cars';
import { CreateCarUseCase } from './create-car.use-case';

export const CREATE_CAR_USE_CASE_PROVIDER: Provider = {
  provide: ICreateCarUseCase,
  useClass: CreateCarUseCase,
};
