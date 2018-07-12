import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServersComponent } from './servers/servers.component';
import { AboutComponent } from './about/about.component';

const appRoutes : Routes = [
  { path: '', component : HomeComponent},
  { path:'contact', component : ContactComponent},
  { path:'servers', component : ServersComponent},
  { path:'about', component : AboutComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ServersComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
