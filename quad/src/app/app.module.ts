import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServersComponent } from './servers/servers.component';

const appRoutes : Routes = [
  { path: '', component : HomeComponent},
  { path:'contact', component : ContactComponent},
  { path:'servers', component : ServersComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
