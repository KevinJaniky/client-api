import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { }
    ])
  ],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
