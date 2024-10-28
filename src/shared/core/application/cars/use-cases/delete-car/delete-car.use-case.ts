import { IDeleteCarUseCase } from '@interfaces/use-cases/cars';
import { ICarsRepository } from '@interfaces/repositories';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class DeleteCarUseCase implements IDeleteCarUseCase {
  constructor(
    @Inject(ICarsRepository) private readonly _carsRepo: ICarsRepository,
  ) {}

  async execute(command: { id: string }): Promise<void> {
    return await this._carsRepo.delete(command.id);
  }
}
