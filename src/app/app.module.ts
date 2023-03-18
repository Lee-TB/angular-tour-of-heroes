import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule],
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
