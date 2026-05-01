import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { UpdateTodoDto } from './dto/update-todo.dto.js';
@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}
  create(dto: CreateTodoDto) {
    return this.prisma.todo.create({ data: dto });
  }
  getAll() {
    return this.prisma.todo.findMany();
  }
  async getById(id: number) {
    const todo = await this.prisma.todo.findUnique({
      where: {
        id: id,
      },
    });
    if (!todo) {
      throw new NotFoundException(`Todo #${id} not found`);
    }
    return todo;
  }
  async remove(id: number) {
    await this.prisma.todo.delete({
      where: {
        id: id,
      },
    });
  }
  async update(id: number, dto: UpdateTodoDto) {
    await this.prisma.todo.update({
      where: {
        id: id,
      },
      data: dto,
    });
  }
}
