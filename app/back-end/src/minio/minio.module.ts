import { MinioService } from './minio.service';
import { TokenModule } from '@back/token/token.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [TokenModule],
  providers: [MinioService],
  exports: [MinioService],
})
export class MinioModule {}
