import { TCarModel } from '@infra/database/schemas';
import { ICreateCarUseCase } from '@interfaces/use-cases/cars';
import { ICarsRepository } from '@interfaces/repositories';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateCarUseCase implements ICreateCarUseCase {
  constructor(
    @Inject(ICarsRepository) private readonly _carsRepo: ICarsRepository,
  ) {}

  async execute(command: { model: string }): Promise<TCarModel> {
    return await this._carsRepo.create({ model: command.model });
  }
}
