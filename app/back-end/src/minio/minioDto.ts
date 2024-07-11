import { ApiProperty } from '@nestjs/swagger';

export enum FileTypes {
  userImage = 'userImage',
  treeImage = 'treeImage',
  simImage = 'simImage',
  worldImage = 'worldImage',
  achievementIcon = 'achievementIcon',
  aspirationIcon = 'aspirationIcon',
  careerIcon = 'careerIcon',
  collectionItemIcon = 'collectionItemIcon',
  lifestyleIcon = 'lifestyleIcon',
  skillIcon = 'skillIcon',
  traitIcon = 'traitIcon',
}

export class SaveFileDto {
  type: FileTypes;
  entityId: string;
  file: File[];
}

export class EditFileDto {
  bucket: string;
  fileName: string;
  file: File[];
  type: FileTypes;
  entityId: string;
}

export class DeleteFileDto {
  bucket: string;
  fileName: string;
  type: FileTypes;
  entityId: string;
}
