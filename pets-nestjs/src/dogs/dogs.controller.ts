import { Body, Controller, Get } from '@nestjs/common';
import { Request } from '@nestjs/common';
@Controller('dogs')
export class DogsController {
  @Get()
  findAll(): string {
    return 'This action returns all dogs';
  }

  @Get()
  findAllRequest(@Body() request: Request): string {
    const data = request.body;
    return `This action returns all dogs ${data}`;
  }
}
