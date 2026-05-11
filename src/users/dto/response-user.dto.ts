import { ApiProperty } from '@nestjs/swagger';

export class ResponseUserDto {
  @ApiProperty({ example: '1' })
  id: number;
  @ApiProperty({ example: 'John Doe' })
  fullName: string;
  @ApiProperty({ example: '2026-05-01T13:39:40.702Z' })
  createdAt: string;
  @ApiProperty({ example: '2026-05-01T13:39:40.702Z' })
  updatedAt: string;
}
