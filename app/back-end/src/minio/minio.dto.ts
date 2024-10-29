import { ApiProperty } from '@nestjs/swagger';

export enum READONLY_BUCKET_NAMES {
  Icons = 'icons',
  Translation = 'translation',
  DataBase = 'dataBase',
  WorldImage = 'worldImage',
}

export enum PUBLIC_BUCKET_NAMES {
  UserImage = 'userImage',
  SimImage = 'simImage',
  TreeImage = 'treeImage',
}

export type FileTypes = READONLY_BUCKET_NAMES | PUBLIC_BUCKET_NAMES;

export class Debug {
  @ApiProperty({ description: 'File', nullable: false })
  file: Express.Multer.File;
}
export class SaveFileDto {
  @ApiProperty({ description: 'Type', nullable: false })
  type: string;
  @ApiProperty({ description: 'File', nullable: false })
  file: Express.Multer.File;
}

export class EditFileDto {
  @ApiProperty({ description: 'File', nullable: false })
  bucket: string;
  @ApiProperty({ description: 'File', nullable: false })
  fileName: string;
  @ApiProperty({ description: 'File', nullable: false })
  file: Express.Multer.File;
  @ApiProperty({ description: 'File', nullable: false })
  type: PUBLIC_BUCKET_NAMES;
}

export class DeleteFileDto {
  @ApiProperty({ description: 'File', nullable: false })
  bucket: string;
  @ApiProperty({ description: 'File', nullable: false })
  file: Express.Multer.File;
  @ApiProperty({ description: 'File', nullable: false })
  type: FileTypes;
  @ApiProperty({ description: 'File', nullable: false })
  entityId: string;
}
