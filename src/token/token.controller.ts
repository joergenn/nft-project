import { Controller, Get, Param, Query } from '@nestjs/common';
import { TokenService } from './token.service';
import { ParseIntPipe } from '@nestjs/common/pipes';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Get()
  findAll(@Query('from', ParseIntPipe) from: number, @Query('to', ParseIntPipe) to: number) {
    return this.tokenService.findAll(from, to);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tokenService.findOne(+id);
  }
}
