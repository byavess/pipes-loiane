import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service'
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FitroArrayImpuroPipe } from './fitro-array-impuro.pipe';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
     CamelCasePipe,
    FiltroArrayPipe,
    FitroArrayImpuroPipe,
    ExemplosPipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
    /* SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: ptbrLocale
    } */
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }