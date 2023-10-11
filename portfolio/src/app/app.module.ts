import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectDetailComponentRoutingModule } from './project-detail/project-detail-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    WorkComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    ProjectComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectDetailComponentRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
