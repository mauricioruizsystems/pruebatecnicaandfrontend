import { Component, OnInit } from '@angular/core';
import { OtrosTemas } from '../models/ptmodels';
import { ptService } from '../services/ptservice';

@Component({
  selector: 'app-ptotrostemas',
  templateUrl: './ptotrostemas.component.html',
  styleUrls: ['./ptotrostemas.component.css']
})
export class PtotrostemasComponent implements OnInit {

  error: any;
  otrostemasLista: Array<OtrosTemas>;
  errorLabel = false;
  successLabel = false;
  errorText: string;
  successText: string;
 
  ValorServicio: any;
 
   constructor(private ptservice: ptService) {
   }
 
   ngOnInit() {
     this.GetOtrosTemas();
   }
 
   GetOtrosTemasResult(): any {
     return this.ptservice.GetOtrosTemas().toPromise();
   }
 
   async GetOtrosTemas() {
     try {
      debugger;
       this.ValorServicio = await this.GetOtrosTemasResult();
       this.otrostemasLista = this.ValorServicio.Result.Lista;
     }
     catch (error) {
       console.error('[error en GetOtrosTemas] : ' + error);
     }
   }
 
 
 
 
 }
 
 
 
 
 