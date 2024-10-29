import { CarBaseResponse } from './cars.base-response';

export namespace GetCarsQuery {
  export class Response {
    cars: CarBaseResponse[];
  }
}
