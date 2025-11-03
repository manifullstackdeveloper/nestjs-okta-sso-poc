import { Controller, Get, Post, Param, UseGuards, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('books')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  @UseGuards(AuthGuard('bearer'))
  getAllBooks(): any[] {
	const books = this.appService.getAllBooks();
  console.warn('books',books);
	return books;
  }

  @Get(':id')
  @UseGuards(AuthGuard('bearer'))
  getBook(@Param() id): any {
	return this.appService.getBook(id);
  }

  @Post()
  @UseGuards(AuthGuard('bearer'))
  updateBook(@Body() book: any): any {
	return this.appService.updateBook(book);
  }
}
