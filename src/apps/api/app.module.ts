import { Module } from '@nestjs/common';
import { ConfigsModule } from '@shared/configurations/core/configs.module';
import { CarsModule } from './modules/cars/cars.module';

@Module({
  imports: [CarsModule, ConfigsModule],
})
export class AppModule {}
