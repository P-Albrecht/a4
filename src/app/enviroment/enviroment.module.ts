import { NgModule } from '@angular/core';import { EnviromentComponent } from './enviroment.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    EnviromentComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [EnviromentComponent],
  providers: [
  ]
})
export class EnviromentModule { }