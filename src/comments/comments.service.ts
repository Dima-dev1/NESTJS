import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto.js';
import { PrismaService } from 'src/prisma/prisma.service.js';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}
  create(dto: CreateCommentDto) {
    // validation of rating 1-5
  }
}
