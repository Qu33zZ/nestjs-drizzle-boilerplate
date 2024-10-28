import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';
import {
  CREATE_CAR_USE_CASE_PROVIDER,
  DELETE_CAR_USE_CASE_PROVIDER,
  GET_CARS_USE_CASE_PROVIDER,
  RIDE_CAR_USE_CASE_PROVIDER,
} from './use-cases';

@Module({
  providers: [
    CREATE_CAR_USE_CASE_PROVIDER,
    GET_CARS_USE_CASE_PROVIDER,
    DELETE_CAR_USE_CASE_PROVIDER,
    RIDE_CAR_USE_CASE_PROVIDER,
  ],
  imports: [DatabaseModule],
  exports: [
    CREATE_CAR_USE_CASE_PROVIDER,
    GET_CARS_USE_CASE_PROVIDER,
    DELETE_CAR_USE_CASE_PROVIDER,
    RIDE_CAR_USE_CASE_PROVIDER,
  ],
})
export class CarsModule {}
