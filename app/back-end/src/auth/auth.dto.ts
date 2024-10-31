import { ApiProperty } from '@nestjs/swagger';

export class UserCredentials {
  @ApiProperty({ description: 'User name', nullable: false })
  name: string;
  @ApiProperty({ description: 'User password', nullable: false })
  password: string;
}

export class UserGoogleCredentials {
  @ApiProperty({ description: 'User name', nullable: false })
  name: string;
  @ApiProperty({ description: 'User password', nullable: false })
  email: string;
  @ApiProperty({ description: 'User avatar', nullable: true })
  avatar: string | null;
}
