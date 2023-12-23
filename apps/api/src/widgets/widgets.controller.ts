import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WidgetsService } from './widgets.service';
import { Widget } from '@angular-production-app/api-interfaces';

@Controller('widgets')
export class WidgetsController {
  constructor(private readonly widgetsService: WidgetsService) {}

  @Post()
  create(@Body() widget: Widget) {
    return this.widgetsService.create(widget);
  }

  @Get()
  findAll() {
    return this.widgetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.widgetsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() widget: Widget) {
    return this.widgetsService.update(id, widget);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.widgetsService.remove(id);
  }
}
