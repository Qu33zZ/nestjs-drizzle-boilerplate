import { IBaseUseCase } from '..';
import { TCarModel } from '@shared/infrastructure/database/schemas';

export interface ICreateCarUseCase
  extends IBaseUseCase<{ model: string }, TCarModel> {}
export const ICreateCarUseCase = Symbol('ICreateCarUseCase');

export interface IDeleteCarUseCase extends IBaseUseCase<{ id: string }, void> {}
export const IDeleteCarUseCase = Symbol('IDeleteCarUseCase');

export interface IRideCarUseCase
  extends IBaseUseCase<{ id: string }, TCarModel> {}
export const IRideCarUseCase = Symbol('IRideCarUseCase');

export interface IGetCarsUseCase extends IBaseUseCase<undefined, TCarModel[]> {}
export const IGetCarsUseCase = Symbol('IGetCarsUseCase');
