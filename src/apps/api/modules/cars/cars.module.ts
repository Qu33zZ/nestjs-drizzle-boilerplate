import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsModule as AppCarModule } from '@application/cars/cars.module';

@Module({ controllers: [CarsControllerV1], imports: [AppCarModule] })
export class CarsModule {}
