import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CarResponseDTO, CreateCarDTO } from './dto';
import { ICreateCarUseCase } from '@interfaces/use-cases/cars';

@Controller('cars')
export class CarsController {
  constructor(
    @Inject(ICreateCarUseCase)
    private readonly _createCarUseCase: ICreateCarUseCase,
  ) {}

  @Post()
  async getCars(@Body() carDto: CreateCarDTO): Promise<CarResponseDTO> {
    const car = await this._createCarUseCase.execute({ model: carDto.model });
    return { ...car };
  }
}
