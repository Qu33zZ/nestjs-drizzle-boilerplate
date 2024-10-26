import { Module } from '@nestjs/common';
import { DrizzleModule } from './drizzle';
import { Pool } from 'pg';
import { databaseSchema } from './schemas';
import { DatabaseConfig } from '../../configurations/configs/database';
import { REPOSITORIES } from './repositories';

@Module({
  imports: [
    DrizzleModule.registerAsync({
      inject: [DatabaseConfig],
      useFactory: (databaseConfig: DatabaseConfig) => {
        const pgPool = new Pool({
          connectionString: databaseConfig.connectionString,
        });
        return [{ client: pgPool, schema: databaseSchema }];
      },
    }),
  ],
  providers: REPOSITORIES,
  exports: REPOSITORIES,
})
export class DatabaseModule {}
