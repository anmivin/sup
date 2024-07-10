import {} from /*   AutoIncrement, */
/*   BelongsToMany, */
/*   Column, */
/*   HasOne, */
/*   Model,
  PrimaryKey,
  Table, */
'sequelize-typescript';

/* import ProfileModel from '@/entities/kk/profile/profile.model';
import LaborReportModel from '@/entities/laborReport/laborReport.model';
import LaborReportFileModel from '@/entities/laborReport/laborReportFile.model';
import LeavePeriodModel from '@/entities/leavePeriod/leavePeriod.model';
import LeavePeriodFileModel from '@/entities/leavePeriod/leavePeriodFile.model';
import ProjectModel from '@/entities/project/project.model';
import StatementFileModel from '@/entities/statementFile/statementFile.model'; */

/* export interface FileModelCreate extends Omit<FileModel, keyof Model> {} */

/* @Table({ tableName: 'files', underscored: true, timestamps: false })
export class FileModel extends Model<FileModel, FileModelCreate> {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: string;

  @Column
  declare path: string;

  @Column
  declare pathTn?: string;

  @Column
  declare name: string;

  @Column
  declare size: number;

   @BelongsToMany(() => LaborReportModel, () => LaborReportFileModel)
  declare laborReports?: LaborReportModel[];

  @BelongsToMany(() => LeavePeriodModel, () => LeavePeriodFileModel)
  declare leavePeriods?: LeavePeriodModel[];

  @HasOne(() => ProfileModel, 'imageFileId')
  declare profile?: ProfileModel[];

  @HasOne(() => StatementFileModel)
  declare statementFile?: StatementFileModel;

  @HasOne(() => ProjectModel, 'imageFileId')
  declare project?: ProjectModel; 
}*/
