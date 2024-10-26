import { Global, Module } from '@nestjs/common';
import { CONFIGS } from '../configs';

@Module({
  providers: [...CONFIGS],
  exports: [...CONFIGS],
})
@Global()
export class ConfigsModule {}
