import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as dayjs from 'dayjs';
import 'dayjs/locale/es'
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
dayjs.locale('es')
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
