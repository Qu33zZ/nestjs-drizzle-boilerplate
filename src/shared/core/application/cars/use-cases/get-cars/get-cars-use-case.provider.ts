import { Provider } from '@nestjs/common';
import { IGetCarsUseCase } from '@interfaces/use-cases/cars';
import { GetCarsUseCase } from './get-cars.use-case';

export const GET_CARS_USE_CASE_PROVIDER: Provider = {
  provide: IGetCarsUseCase,
  useClass: GetCarsUseCase,
};
