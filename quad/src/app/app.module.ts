import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule} from '@angular/router';

/* Internal Component */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServersComponent } from './servers/servers.component';
import { AboutComponent } from './about/about.component';
import {BasicHighlightDirective} from './basic-highlight/basic-highlight.directive';
import {BetterHighlightDirective} from './basic-highlight/better-highlight.directive';
import { ReactiveComponent } from './reactive/reactive.component';
import {ShortenPipe} from './shorten.pipe';
import {FirebaseComponent } from './firebase/firebase.component';
import { ServerService } from './services/server.service';
/* Internal Component End*/
const appRoutes: Routes = [
  { path: '', component : HomeComponent},
  { path: 'contact', component : ContactComponent},
  { path: 'servers', component : ServersComponent},
  { path: 'about', component : AboutComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ServersComponent,
    AboutComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    ReactiveComponent,
    ShortenPipe,
    FirebaseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
