import { ApiProperty } from '@nestjs/swagger';

export class FileResponseDTO {
  @ApiProperty({ description: 'File id', nullable: false })
  id: string;
  @ApiProperty({ description: 'File url', nullable: false })
  url: string;
}
