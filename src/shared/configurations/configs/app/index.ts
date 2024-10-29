import { IsEnum, IsNumber } from 'class-validator';
import { AppEnvironment } from '../../../types';
import { Config } from '../../core/decorators/config.decorator';

@Config()
export class AppConfig {
  @IsNumber()
  port: number = +process.env.PORT || 5001;

  @IsEnum(AppEnvironment)
  mode: AppEnvironment = process.env.ENVIRONMENT as AppEnvironment;
}
