import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

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
    InterfacesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
