import { ApiProperty } from '@nestjs/swagger';

export enum READONLY_BUCKET_NAMES {
  Icons = 'icons',
  Translation = 'translation',
  DataBase = 'dataBase',
  WorldImage = 'worldImage',
}

export enum PUBLIC_BUCKET_NAMES {
  Avatars = 'avatars',
  SimImage = 'simImage',
  TreeImage = 'treeImage',
  Debug = 'debug',
}

export type FileTypes = READONLY_BUCKET_NAMES | PUBLIC_BUCKET_NAMES;

export class Debug {
  @ApiProperty({ description: 'File', nullable: false })
  file: Express.Multer.File;
}
export class SaveFileDto {
  type: PUBLIC_BUCKET_NAMES;
  entityId: string;
  file: Express.Multer.File;
}

export class EditFileDto {
  bucket: string;
  fileName: string;
  file: Express.Multer.File;
  type: PUBLIC_BUCKET_NAMES;
  entityId: string;
}

export class DeleteFileDto {
  bucket: string;
  fileName: string;
  type: FileTypes;
  entityId: string;
}
