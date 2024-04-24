import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { English } from 'src/i18n/en';
import { Spanish } from 'src/i18n/es';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService) {
    this.initTranslate();
  }

  private langIds: any = [];
  
  initTranslate() {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    if (browserLang)
      this.translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
    else {
      this.translate.use('en');
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
  loadTranslations(): void {
    const locales = [Spanish, English];
    locales.forEach((locale) => {
      this.translate.setTranslation(locale.lang, locale.data, true);
      this.langIds.push(locale.lang);
    });
    this.translate.addLangs(this.langIds);
  }
}
