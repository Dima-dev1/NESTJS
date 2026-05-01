import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateRecipeDto } from './dto/create-recipe.dto.js';
import { UpdateRecipeDto } from './dto/update-recipe.dto.js';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateRecipeDto) {
    return this.prisma.recipe.create({ data: dto });
  }

  getAll() {
    return this.prisma.recipe.findMany();
  }

  async getById(id: number) {
    const recipe = await this.prisma.recipe.findUnique({
      where: { id },
    });
    if (!recipe) {
      throw new NotFoundException(`Recipe #${id} not found`);
    }
    return recipe;
  }

  async remove(id: number) {
    await this.prisma.recipe.delete({
      where: { id },
    });
  }

  async update(id: number, dto: UpdateRecipeDto) {
    await this.prisma.recipe.update({
      where: { id },
      data: dto,
    });
  }
}
