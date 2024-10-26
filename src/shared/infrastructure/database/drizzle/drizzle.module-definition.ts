import { ConfigurableModuleBuilder } from '@nestjs/common';
import { TDrizzleOptions } from './types';

export const {
  ConfigurableModuleClass: ConfigurableDrizzleModule,
  MODULE_OPTIONS_TOKEN: DRIZZLE_OPTIONS,
} = new ConfigurableModuleBuilder<TDrizzleOptions>().build();
