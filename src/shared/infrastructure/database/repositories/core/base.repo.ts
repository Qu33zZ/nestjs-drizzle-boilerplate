import { Inject, Injectable } from '@nestjs/common';
import { DRIZZLE_DATASOURCE_PROVIDER_TOKEN } from '../../drizzle/constants/injection-tokens';
import { TDatabaseSchema } from '../../schemas';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

@Injectable()
export class BaseRepository {
  @Inject(DRIZZLE_DATASOURCE_PROVIDER_TOKEN)
  protected readonly _drizzle: NodePgDatabase<TDatabaseSchema>;
}
