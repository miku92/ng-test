import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MostraTestoComponent } from './mostra-testo/mostra-testo.component';

@NgModule({
  declarations: [
    AppComponent,
    MostraTestoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
