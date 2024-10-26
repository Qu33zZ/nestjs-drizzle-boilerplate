import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';
import { CREATE_CAR_USE_CASE_PROVIDER } from './use-cases/create-car/create-car-use-case.provider';

@Module({
  providers: [CREATE_CAR_USE_CASE_PROVIDER],
  imports: [DatabaseModule],
  exports: [CREATE_CAR_USE_CASE_PROVIDER],
})
export class CarsModule {}
