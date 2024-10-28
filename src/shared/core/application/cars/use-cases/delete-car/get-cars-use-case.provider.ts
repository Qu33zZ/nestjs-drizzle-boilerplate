import { Provider } from '@nestjs/common';
import { IDeleteCarUseCase } from '@interfaces/use-cases/cars';
import { DeleteCarUseCase } from './delete-car.use-case';

export const DELETE_CAR_USE_CASE_PROVIDER: Provider = {
  provide: IDeleteCarUseCase,
  useClass: DeleteCarUseCase,
};
