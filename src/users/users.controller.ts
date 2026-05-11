import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  ParseIntPipe,
  Put,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ResponseUserDto } from './dto/response-user.dto.js';
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post()
  @ApiOkResponse({ type: ResponseUserDto })
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }
  @Get()
  @ApiOkResponse({ type: ResponseUserDto })
  getAll() {
    return this.userService.getAll();
  }
  @Get(':id')
  @ApiOkResponse({ type: ResponseUserDto })
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getById(id);
  }
  @Put(':id')
  @ApiOkResponse({ type: ResponseUserDto })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateUserDto) {
    return this.userService.update(id, dto);
  }
}
