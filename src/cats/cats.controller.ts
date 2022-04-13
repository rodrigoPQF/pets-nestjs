import { Body, Controller, Get } from '@nestjs/common';
import { Request } from '@nestjs/common';
@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get()
  findAllRequest(@Body() request: Request): string {
    const data = request.body;
    return `This action returns all cats ${data}`;
  }
}
