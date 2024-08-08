import { ApiProperty } from '@nestjs/swagger';

export class InputUserDto {
  @ApiProperty({ description: 'User name', nullable: false })
  name: string;
  @ApiProperty({ description: 'User password', nullable: true })
  password: string | null;
  @ApiProperty({ description: 'User email', nullable: true })
  email: string | null;
  @ApiProperty({ description: 'User avatar', nullable: true })
  avatar?: string | null;
}

export class EditUserDto {
  @ApiProperty({ description: 'User id', nullable: true })
  id?: string;
  @ApiProperty({ description: 'User name', nullable: false })
  name: string;
  @ApiProperty({ description: 'User email', nullable: true })
  email: string | null;
}

export class UserCredentials {
  @ApiProperty({ description: 'User name', nullable: false })
  name: string;
  @ApiProperty({ description: 'User password', nullable: false })
  password: string;
}
