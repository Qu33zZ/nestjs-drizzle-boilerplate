import { TCarModel } from '../../infrastructure/database/schemas';

export interface ICarsRepository {
  create(car: { model: string }): Promise<TCarModel>;
  getAll(): Promise<TCarModel[]>;
  delete(id: string): Promise<void>;
  getOneById(id: string): Promise<TCarModel | undefined>;
  incrementRidesCount(id: string): Promise<TCarModel>;
}

export const ICarsRepository = Symbol('ICarsRepository');
