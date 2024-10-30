import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { CarResponseDTO, CreateCarDTO } from './dto';
import {
  ICreateCarUseCase,
  IDeleteCarUseCase,
  IGetCarsUseCase,
  IRideCarUseCase,
} from '@interfaces/use-cases/cars';
import { ApiResponse } from '@nestjs/swagger';

@Controller('v1/cars')
export class CarsControllerV1 {
  constructor(
    @Inject(ICreateCarUseCase)
    private readonly _createCarUseCase: ICreateCarUseCase,
    @Inject(IGetCarsUseCase) private readonly _getCarsUseCase: IGetCarsUseCase,
    @Inject(IDeleteCarUseCase)
    private readonly _deleteCarUseCae: IDeleteCarUseCase,
    @Inject(IRideCarUseCase) private readonly _rideCarUseCase: IRideCarUseCase,
  ) {}

  @Post()
  @ApiResponse({ type: CarResponseDTO })
  async createCar(@Body() carDto: CreateCarDTO): Promise<CarResponseDTO> {
    const car = await this._createCarUseCase.execute({ model: carDto.model });
    return { ...car };
  }

  @Get()
  @ApiResponse({ type: CarResponseDTO, isArray: true })
  async getCars(): Promise<CarResponseDTO[]> {
    const cars = await this._getCarsUseCase.execute();
    return cars.map((car) => ({ ...car }));
  }

  @Delete(':id')
  async deleteCar(@Param('id', new ParseUUIDPipe()) id: string): Promise<void> {
    await this._deleteCarUseCae.execute({ id });
  }

  @Post('/:id/ride')
  @ApiResponse({ type: CarResponseDTO })
  async rideCar(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<CarResponseDTO> {
    const car = await this._rideCarUseCase.execute({ id });
    return {
      ...car,
    };
  }
}
