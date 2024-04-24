import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  RefresherCustomEvent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRefresher,
  IonRefresherContent,
  IonList,
  IonToggle,
  IonButtons,
  IonButton,
} from '@ionic/angular/standalone';

import { DataService } from '../../services/data.service';
import { SuperheroItemListComponent } from '../../components/superhero-item-list/superhero-item-list.component';
import { HeroData, heroes } from 'src/app/services/heros';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonButtons,
    IonToggle,
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonRefresher,
    IonRefresherContent,
    IonList,
    SuperheroItemListComponent,
    TranslateModule,
  ],
  providers : [TranslateService]
})
export class HomePage {
  private data = inject(DataService);
  paletteToggle = false;
  heroesList: HeroData[] = heroes;

  constructor() {
    this.getHeroes();
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getHeroes() {
    this.heroesList = heroes;
    //this.data.getHeroes().subscribe((res: HeroData[]) => {});
  }
}
