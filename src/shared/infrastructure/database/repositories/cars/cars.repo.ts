import { Injectable } from '@nestjs/common';
import { BaseRepository } from '@infra/database/repositories/core';
import { ICarsRepository } from '@interfaces/repositories/cars.repo';
import { cars, TCarModel } from '@infra/database/schemas';

@Injectable()
export class CarsRepository extends BaseRepository implements ICarsRepository {
  async getOneById(id: string): Promise<TCarModel | undefined> {
    return await this._drizzle.query.cars.findFirst({
      where: (cars, { eq }) => eq(cars.id, id),
    });
  }

  async create({ model }: { model: string }): Promise<TCarModel> {
    const [car] = await this._drizzle
      .insert(cars)
      .values({ model })
      .returning();
    return car;
  }
}
