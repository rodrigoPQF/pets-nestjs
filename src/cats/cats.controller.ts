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
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  // @Get(':id')
  // find(@Param() params): CatsModule {
  //   return this.catsService.
  // }
  // @Get()
  // findAll(): Promise<CatsModule[]> {
  //   return this.catsService.findAll()
  // }

  // @Post()
  // create(@Body() gato): string {
  //   this.catsService.create(gato);
  //   return `This action returns all cats if data ${JSON.stringify(gato)}`;
  // }

  // @Put()
  // update(@Body() gato): string {
  //   this.catsService.update(gato);
  //   return `This action update cat ${gato}`;
  // }

  // @Delete(':id')
  // delete(@Param() params): string {
  //   this.catsService.delete(params.id);
  //   return `Apagar o gato ${params.id}`;
  // }
}
