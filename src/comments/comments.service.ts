import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto.js';
import { PrismaService } from 'src/prisma/prisma.service.js';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}
  create(dto: CreateCommentDto) {
    // validation of rating 1-5
    if (dto.rating < 1 || dto.rating > 5) {
      throw new BadRequestException('rating must between 1 and 5');
    }
    return this.prisma.$transaction(async (tx) => {
      const comment = await tx.comments.create({ data: dto });
      await this.recalcRecipeRating(tx, comment.recipeId);
      return comment;
    });
  }
  getByRecipe(recipeId: number) {
    return this.prisma.comments.findMany({
      where: { recipeId },
      include: { user: { select: { id: true, fullName: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async remove(id: number) {
    await this.prisma.$transaction(async (tx) => {
      const comment = await tx.comments.delete({ where: { id } });
      await this.recalcRecipeRating(tx, comment.recipeId);
    });
  }

  private async recalcRecipeRating(
    tx: Parameters<Parameters<PrismaService['$transaction']>[0]>[0],
    recipeId: number,
  ) {
    const agg = await tx.comments.aggregate({
      where: { recipeId },
      _avg: { rating: true },
    });
    await tx.recipe.update({
      where: { id: recipeId },
      data: { rating: agg._avg.rating ?? 0 },
    });
  }
}
