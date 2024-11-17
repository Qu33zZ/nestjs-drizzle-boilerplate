import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CarBaseResponse } from './cars.base-response';
import { TCarModel } from '@infra/database/schemas';

export namespace CreateCarCommand {
  export class Request {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    model: TCarModel['model'];
  }

  export class Response extends CarBaseResponse {}
}
