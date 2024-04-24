import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  Platform,
  IonItem,
  IonLabel,
  IonNote,
  IonIcon,
  IonAvatar,
  IonThumbnail,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronForward } from 'ionicons/icons';
import { HeroData } from 'src/app/services/heros';

@Component({
  selector: 'app-superhero-item-list',
  templateUrl: './superhero-item-list.component.html',
  styleUrls: ['./superhero-item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonAvatar,
    CommonModule,
    RouterLink,
    IonItem,
    IonLabel,
    IonNote,
    IonIcon,
    IonThumbnail,
  ],
})
export class SuperheroItemListComponent {
  private platform = inject(Platform);
  @Input() heroData?: HeroData;
  isIos() {
    return this.platform.is('ios');
  }
  constructor() {
    addIcons({ chevronForward });
  }
}
