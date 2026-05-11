import {
  Controller,
  ParseIntPipe,
  Post,
  Get,
  Param,
  Body,
  Delete,
} from '@nestjs/common';
import { CommentsService } from './comments.service.js';
import { CreateCommentDto } from './dto/create-comment.dto.js';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}
  @Post()
  create(@Body() dto: CreateCommentDto) {
    return this.commentsService.create(dto);
  }
  @Get('recipe/:recipeId')
  getByRecipe(@Param('recipeId', ParseIntPipe) id: number) {
    return this.commentsService.getByRecipe(id);
  }
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.commentsService.remove(id);
  }
}
