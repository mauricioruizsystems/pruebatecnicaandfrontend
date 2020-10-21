import { Component, OnInit } from '@angular/core';
import { Tramites } from '../models/ptmodels';
import { ptService } from '../services/ptservice';

@Component({
  selector: 'app-pttramites',
  templateUrl: './pttramites.component.html',
  styleUrls: ['./pttramites.component.css']
})
export class PttramitesComponent implements OnInit {
 error: any;
 tramitesLista: Array<Tramites>;
 tramiteprincipal : Tramites;
 errorLabel = false;
 successLabel = false;
 errorText: string;
 successText: string;

 ValorServicio: any;

  constructor(private ptservice: ptService) {
  }

  ngOnInit() {
    this.GetTramites();
  }

  GetTramitesResult(): any {
    return this.ptservice.GetTramites().toPromise();
  }

  async GetTramites() {
    try {
     debugger;
      this.ValorServicio = await this.GetTramitesResult();
      this.tramitesLista = this.ValorServicio.Result.Lista;
      this.tramiteprincipal = this.tramitesLista[0];
    }
    catch (error) {
      console.error('[error en GetTramites] : ' + error);
    }
  }




}




