import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { HeaderComponent } from './component/header/header.component';
import { ConnectionComponent } from './component/connection/connection.component';
import { RecrutementComponent } from './component/recrutement/recrutement.component';
import { ReferenceComponent } from './component/reference/reference.component';
import { ProposComponent } from './component/propos/propos.component';
import { ActivitesComponent } from './component/activites/activites.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    ConnectionComponent,
    RecrutementComponent,
    ReferenceComponent,
    ProposComponent,
    ActivitesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
