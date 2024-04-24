import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { HeroData, heroes } from 'src/app/services/heros';

@Component({
  selector: 'app-superheroe-detail',
  templateUrl: './superheroe-detail.page.html',
  styleUrls: ['./superheroe-detail.page.scss'],
})
export class SuperheroeDetailPage implements OnInit {
  public hero!: HeroData | undefined;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);

  constructor() {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.hero = heroes.find((hero) => hero.id === parseInt(id, 10));
   
   // this.data.getHeroById(parseInt(id, 10)).subscribe();
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios');
    return isIos ? 'Inbox' : '';
  }
}
