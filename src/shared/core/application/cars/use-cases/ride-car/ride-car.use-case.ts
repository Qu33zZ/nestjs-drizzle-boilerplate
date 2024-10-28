import { IRideCarUseCase } from '@interfaces/use-cases/cars';
import { ICarsRepository } from '@interfaces/repositories';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TCarModel } from '../../../../../infrastructure/database/schemas';

@Injectable()
export class RideCarUseCase implements IRideCarUseCase {
  constructor(
    @Inject(ICarsRepository) private readonly _carsRepo: ICarsRepository,
  ) {}

  async execute(command: { id: string }): Promise<TCarModel> {
    const car = await this._carsRepo.getOneById(command.id);
    if (!car) {
      throw new NotFoundException('Car not found');
    }

    const updatedCar = await this._carsRepo.incrementRidesCount(command.id);
    return updatedCar;
  }
}
