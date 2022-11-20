import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchByFieldPipe } from './search-by-field.pipe';

@NgModule({
  declarations: [SearchByFieldPipe],
  exports: [SearchByFieldPipe],
  imports: [CommonModule],
})
export class PipeModule {}
