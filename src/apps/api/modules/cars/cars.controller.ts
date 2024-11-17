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
import {
  ICreateCarUseCase,
  IDeleteCarUseCase,
  IGetCarsUseCase,
  IRideCarUseCase,
} from '@interfaces/use-cases/cars';
import { ApiResponse } from '@nestjs/swagger';
import {
  CreateCarCommand,
  GetCarsQuery,
  DeleteCarCommand,
  RideCarCommand,
} from '@shared/contracts';

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
  @ApiResponse({ type: CreateCarCommand.Response })
  async createCar(
    @Body() request: CreateCarCommand.Request,
  ): Promise<CreateCarCommand.Response> {
    const car = await this._createCarUseCase.execute({ model: request.model });

    return { ...car };
  }

  @Get()
  @ApiResponse({ type: GetCarsQuery.Response })
  async getCars(): Promise<GetCarsQuery.Response> {
    const cars = await this._getCarsUseCase.execute();

    return {
      cars: cars.map((car) => ({ ...car })),
    };
  }

  @Delete(':id')
  async deleteCar(
    @Param('id', new ParseUUIDPipe()) id: DeleteCarCommand.Request['id'],
  ): Promise<void> {
    await this._deleteCarUseCae.execute({ id });
  }

  @Post('/:id/ride')
  @ApiResponse({ type: RideCarCommand.Response })
  async rideCar(
    @Param('id', new ParseUUIDPipe()) id: RideCarCommand.Request['id'],
  ): Promise<RideCarCommand.Response> {
    const car = await this._rideCarUseCase.execute({ id });

    return {
      ...car,
    };
  }
}
