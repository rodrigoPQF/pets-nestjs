import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Cat, Prisma } from '@prisma/client';

@Injectable()
export class CatsService {
  constructor(private prisma: PrismaService) {}

  async findcat(
    catWhereUniqueInput: Prisma.CatWhereUniqueInput,
  ): Promise<Cat | null> {
    return this.prisma.cat.findUnique({
      where: catWhereUniqueInput,
    });
  }

  async findCats(): Promise<Cat[]> {
    return this.prisma.cat.findMany();
  }

  async createCat(data: Prisma.CatCreateInput): Promise<Cat> {
    if (!data) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.prisma.cat.create({
      data,
    });
  }

  async updateCat(params: {
    where: Prisma.CatWhereUniqueInput;
    data: Prisma.CatUpdateInput;
  }): Promise<Cat> {
    const { where, data } = params;
    if (!data) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.prisma.cat.update({
      data,
      where,
    });
  }

  async deleteCat(where: Prisma.CatWhereUniqueInput): Promise<Cat> {
    return this.prisma.cat.delete({
      where,
    });
  }
}
