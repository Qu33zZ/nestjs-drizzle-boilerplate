import { ApiProperty } from '@nestjs/swagger';

export class CarResponseDTO {
  @ApiProperty({ description: 'Car id' })
  id: string;
  @ApiProperty({ description: 'Car model' })
  model: string;
  @ApiProperty({ description: 'Amount of rides that car made' })
  ridesCount: number;
}
