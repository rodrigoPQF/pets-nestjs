import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
@Controller('cats')
export class CatsController {
  @Get(':id')
  find(@Param() params): string {
    return `This action return one cat ${params.id}`;
  }
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Post()
  create(@Body() gato): string {
    return `This action returns all cats if data ${JSON.stringify(gato)}`;
  }

  @Put()
  update(@Body() gato): string {
    return `This action update cat ${gato}`;
  }

  @Delete(':id')
  delete(@Param() params): string {
    return `Apagar o gato ${params.id}`;
  }
}
