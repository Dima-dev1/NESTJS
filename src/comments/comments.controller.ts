import {
  Controller,
  ParseIntPipe,
  Post,
  Get,
  Param,
  Body,
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
  getAll(@Param('recipeId', ParseIntPipe) id: number) {
    return this.commentsService.getAll(id);
  }
}
