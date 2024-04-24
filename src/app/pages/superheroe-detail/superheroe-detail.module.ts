import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperheroeDetailPageRoutingModule } from './superheroe-detail-routing.module';

import { SuperheroeDetailPage } from './superheroe-detail.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperheroeDetailPageRoutingModule, 
    TranslateModule
  ],
  declarations: [SuperheroeDetailPage]
})
export class SuperheroeDetailPageModule {}
