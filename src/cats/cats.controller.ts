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
@Controller('cats')
export class CatsController {
  cats: CatsModule[] = [
    new CatsModule('Flinn', 12, 'Manicoon'),
    new CatsModule('Blunaldo', 2, 'Manicoon'),
    new CatsModule('Roneld', 4, 'Vira-lata'),
  ];
  @Get(':id')
  find(@Param() params): CatsModule {
    return this.cats[params.id];
  }
  @Get()
  findAll(): CatsModule[] {
    return this.cats;
  }

  @Post()
  create(@Body() gato): string {
    this.cats.push(gato);
    return `This action returns all cats if data ${JSON.stringify(gato)}`;
  }

  @Put()
  update(@Body() gato): string {
    return `This action update cat ${gato}`;
  }

  @Delete(':id')
  delete(@Param() params): string {
    this.cats.pop();
    return `Apagar o gato ${params.id}`;
  }
}
