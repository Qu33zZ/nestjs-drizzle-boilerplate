import { IRideCarUseCase } from '@interfaces/use-cases/cars';
import { ICarsRepository } from '@interfaces/repositories';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TCarModel } from '../../../../../infrastructure/database/schemas';
import { Car } from '../../../../domain/cars/car.entity';

@Injectable()
export class RideCarUseCase implements IRideCarUseCase {
  constructor(
    @Inject(ICarsRepository) private readonly _carsRepo: ICarsRepository,
  ) {}

  async execute(command: { id: string }): Promise<TCarModel> {
    const carDbModel = await this._carsRepo.getOneById(command.id);
    if (!carDbModel) {
      throw new NotFoundException('Car not found');
    }

    //mocked domain logic just for example
    const car = Car.fromDatabaseModel(carDbModel);
    car.ride();

    const updatedCar = await this._carsRepo.incrementRidesCount(command.id);
    return updatedCar;
  }
}
