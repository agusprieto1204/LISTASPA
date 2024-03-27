import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComprasFormatoPipe } from './pipes/compras-formato.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    ComprasFormatoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
