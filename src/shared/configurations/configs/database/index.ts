import { IsNotEmpty } from 'class-validator';
import { Config } from '../../core/decorators/config.decorator';

@Config()
export class DatabaseConfig {
  @IsNotEmpty()
  connectionString: string = process.env.POSTGRES_URL;
}
