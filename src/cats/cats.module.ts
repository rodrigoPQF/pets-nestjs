import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatsService, PrismaService],
})
export class CatsModule {}
