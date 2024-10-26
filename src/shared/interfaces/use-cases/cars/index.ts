import { IBaseUseCase } from '..';
import { TCarModel } from '@shared/infrastructure/database/schemas';

export interface ICreateCarUseCase
  extends IBaseUseCase<{ model: string }, TCarModel> {}
export const ICreateCarUseCase = Symbol('ICreateCarUseCase');

export interface IDeleteCarUseCase {}
export const IDeleteCarUseCase = Symbol('IDeleteCarUseCase');

export interface IRideCarUseCase {}
export const IRideCarUseCase = Symbol('IRideCarUseCase');

export interface IGetCarsUseCase {}
export const IGetCarsUseCase = Symbol('IGetCarsUseCase');
