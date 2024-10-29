import * as carsSchema from './cars';

export const databaseSchema = { ...carsSchema };

export type TDatabaseSchema = typeof databaseSchema;

export { TCarModel, cars } from './cars';
