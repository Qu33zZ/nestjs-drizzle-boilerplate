import * as walletsSchema from './cars';

export const databaseSchema = { ...walletsSchema };

export type TDatabaseSchema = typeof databaseSchema;

export { TCarModel, cars } from './cars';
