import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { UpdateUserDto } from './dto/update-user.dto.js';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  create(dto: CreateUserDto) {
    return this.prisma.user.create({ data: dto });
  }
  getAll() {
    return this.prisma.user.findMany();
  }
  async getById(id: number) {
    const user = await this.prisma.todo.findUnique({
      where: {
        id: id,
      },
    });
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }
  async remove(id: number) {
    await this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
  async update(id: number, dto: UpdateUserDto) {
    await this.prisma.user.update({
      where: {
        id: id,
      },
      data: dto,
    });
  }
}
