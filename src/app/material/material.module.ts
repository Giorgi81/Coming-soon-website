import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';




const material = [
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule

]



@NgModule({

  imports: [material],
  exports: [material]
})
export class MaterialModule { }
