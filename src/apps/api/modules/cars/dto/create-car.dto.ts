import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCarDTO {
  @ApiProperty()
  @IsNotEmpty()
  model: string;
}
