import { IsEnum, IsNumber } from 'class-validator';
import { EAppEnvironment } from '../../../types';
import { Config } from '../../core/decorators/config.decorator';

@Config()
export class AppConfig {
  @IsNumber()
  port: number = +process.env.PORT || 5001;

  @IsEnum(EAppEnvironment)
  mode: EAppEnvironment = process.env.ENVIRONMENT as EAppEnvironment;
}
