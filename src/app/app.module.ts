import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { Body1Component } from './body/body1/body1.component';
import { Body2Component } from './body/body2/body2.component';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';
import { LocalrefComponent } from './localref/localref.component';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { DirectivesComponent } from './directives/directives.component';
import { CustomDirective } from './custom.directive';
import { ServcompinComponent } from './servcompin/servcompin.component';
import { ServcompoutComponent } from './servcompout/servcompout.component';
import { PractserveinComponent } from './practservein/practservein.component';
import { PractserveoutComponent } from './practserveout/practserveout.component';

import {PractserviceService} from "./practservice.service";
import {ServiceService} from "./service.service";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PagesComponent } from './pages/pages.component';
import { ContactComponent } from './contact/contact.component';
import { SubComponent } from './about/sub/sub.component';


const myRoutes: Routes = [
  { path:'',component:HomeComponent },
  { path:'about',component:AboutComponent },
  { path:'about/:proId',component:AboutComponent },
  { path:'about/:proId/:proName',component:AboutComponent },
  { path:'pages',component:PagesComponent },
  { path:'contact',component:ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BodyComponent,
    Body1Component,
    Body2Component,
    RegisterComponent,
    ListComponent,
    LocalrefComponent,
    InterfacesComponent,
    DirectivesComponent,
    CustomDirective,
    ServcompinComponent,
    ServcompoutComponent,
    PractserveinComponent,
    PractserveoutComponent,
    HomeComponent,
    AboutComponent,
    PagesComponent,
    ContactComponent,
    SubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [PractserviceService,ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
