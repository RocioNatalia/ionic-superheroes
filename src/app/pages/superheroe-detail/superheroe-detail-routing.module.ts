import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperheroeDetailPage } from './superheroe-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SuperheroeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperheroeDetailPageRoutingModule {}
