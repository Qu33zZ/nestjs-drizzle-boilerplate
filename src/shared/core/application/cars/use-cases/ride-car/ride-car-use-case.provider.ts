import { Provider } from '@nestjs/common';
import { IRideCarUseCase } from '@interfaces/use-cases/cars';
import { RideCarUseCase } from './ride-car.use-case';

export const RIDE_CAR_USE_CASE_PROVIDER: Provider = {
  provide: IRideCarUseCase,
  useClass: RideCarUseCase,
};
