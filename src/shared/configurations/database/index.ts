import { IsUrl } from 'class-validator';
import { Config } from '../core/decorators/config.decorator';

@Config()
export class DatabaseConfig {
  @IsUrl()
  connectionString: string = process.env.POSTGRES_URL;
}
