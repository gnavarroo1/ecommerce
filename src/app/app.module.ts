import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';

// Components
import { AppComponent } from './app.component';

// Routes
import { routes } from './app.routes';

// Modules
import { LayoutModule } from './app-navbar/layout.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/index';
import { StoreModule } from '@ngrx/store';

// adding rx operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/of';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    LayoutModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
