import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { WidgetsService } from './services/widgets/widgets.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [WidgetsService],
})
export class CoreDataModule {}