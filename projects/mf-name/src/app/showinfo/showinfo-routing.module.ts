import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowinfoComponent } from './showinfo.component';

const routes: Routes = [
  {
    path: '',
    component: ShowinfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowinfoRoutingModule { }
