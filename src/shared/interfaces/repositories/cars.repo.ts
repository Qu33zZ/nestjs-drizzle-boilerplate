import { TCarModel } from '../../infrastructure/database/schemas';

export interface ICarsRepository {
  create(car: { model: string }): Promise<TCarModel>;
}

export const ICarsRepository = Symbol('ICarsRepository');
