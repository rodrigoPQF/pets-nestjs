import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { CatsService } from './cats/cats.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [CatsModule, PrismaService],
  controllers: [CatsController],
  providers: [CatsService, PrismaService],
})
export class AppModule {}
