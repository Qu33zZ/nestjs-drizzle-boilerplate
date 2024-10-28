import { TCarModel } from '@infra/database/schemas';
import { IGetCarsUseCase } from '@interfaces/use-cases/cars';
import { ICarsRepository } from '@interfaces/repositories';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GetCarsUseCase implements IGetCarsUseCase {
  constructor(
    @Inject(ICarsRepository) private readonly _carsRepo: ICarsRepository,
  ) {}

  async execute(): Promise<TCarModel[]> {
    return await this._carsRepo.getAll();
  }
}
