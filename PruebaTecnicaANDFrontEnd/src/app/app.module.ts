import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PtheaderComponent } from './ptheader/ptheader.component';
import { PtfooterComponent } from './ptfooter/ptfooter.component';
import { PtsectionsComponent } from './ptsections/ptsections.component';
import { PttramitesComponent } from './pttramites/pttramites.component';
import { PtopinionComponent } from './ptopinion/ptopinion.component';
import { PtcuentanosComponent } from './ptcuentanos/ptcuentanos.component';
import { PtotrostemasComponent } from './ptotrostemas/ptotrostemas.component';
import { ptService } from './services/ptservice';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PtheaderComponent,
    PtfooterComponent,
    PtsectionsComponent,
    PttramitesComponent,
    PtopinionComponent,
    PtcuentanosComponent,
    PtotrostemasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
