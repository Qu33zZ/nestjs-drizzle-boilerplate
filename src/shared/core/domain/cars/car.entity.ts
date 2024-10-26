import { TCarModel } from '@infra/database/schemas';
import { TClassProperties } from '@shared/types/utils';

export class Car {
  id?: string;
  model: string;
  ridesCount: number;

  constructor(properties: TClassProperties<Car>) {
    Object.assign(this, properties);
  }

  public toDatabaseModel(): TCarModel {
    return {
      id: this.id,
      model: this.model,
      ridesCount: this.ridesCount,
    };
  }

  public static fromDatabaseModel(model: TCarModel): Car {
    return new Car({ ...model });
  }

  ride() {
    this.ridesCount += 1;
  }
}
