import { Module } from '@nestjs/common';
import { ConfigurableDrizzleModule } from './drizzle.module-definition';
import { DRIZZLE_DATASOURCE_PROVIDER } from './drizzle-datasource.provider';

@Module({
  providers: [DRIZZLE_DATASOURCE_PROVIDER],
  exports: [DRIZZLE_DATASOURCE_PROVIDER],
})
export class DrizzleModule extends ConfigurableDrizzleModule {
  constructor() {
    super();
  }
}
