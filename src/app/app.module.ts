import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { HeroesService } from './services/heroes.services';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { FinderComponent } from './components/finder/finder.component';
import { HeroeCartComponent } from './components/heroe-cart/heroe-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    FinderComponent,
    HeroeCartComponent,
  ],
  imports: [BrowserModule, APP_ROUTING, FormsModule],
  providers: [HeroesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
