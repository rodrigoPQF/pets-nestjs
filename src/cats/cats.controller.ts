import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CatsModule } from './cats.module';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { Prisma } from '@prisma/client';

interface Params {
  id?: number;
}
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Get(':id')
  async find(@Param() params: Params): Promise<CatsModule> {
    return await this.catsService.findcat({ id: Number(params.id) });
  }
  @Get()
  async findAll(): Promise<CatsModule[]> {
    return await this.catsService.findCats();
  }

  @Post()
  async create(@Body() gato: Cat): Promise<string> {
    await this.catsService.createCat(gato);
    return `This action returns all cats if data ${JSON.stringify(gato)}`;
  }

  @Put(':id')
  async update(@Body() gato: Cat, @Param() params): Promise<string> {
    await this.catsService.updateCat({
      where: { id: Number(params.id) },
      data: gato,
    });
    return `This action update cat ${gato}`;
  }

  @Delete(':id')
  async delete(@Param() params): Promise<string> {
    await this.catsService.deleteCat(params.id);
    return `Apagar o gato ${params.id}`;
  }
}
