import { Component, OnInit } from '@angular/core';
import { Opinion,Cuentanos } from '../models/ptmodels';
import { ptService } from '../services/ptservice';

@Component({
  selector: 'app-ptopinion',
  templateUrl: './ptopinion.component.html',
  styleUrls: ['./ptopinion.component.css']
})
export class PtopinionComponent implements OnInit {
  error: any;
  opinionLista: Array<Opinion>;
  opinionprincipal : Opinion;
  errorLabel = false;
  successLabel = false;
  errorText: string;
  successText: string;
  opinion: string = '';
  mensaje: string = '';
 
  ValorServicio: any;
 
   constructor(private ptservice: ptService) {
   }
 
   ngOnInit() {
     this.GetOpinion();
   }
 
   GetOpinionResult(): any {
     return this.ptservice.GetOpinion().toPromise();
   }
 
   async GetOpinion() {
     try {
      debugger;
       this.ValorServicio = await this.GetOpinionResult();
       this.opinionLista = this.ValorServicio.Result.Lista;
       this.opinionprincipal = this.opinionLista[0];
     }
     catch (error) {
       console.error('[error en GetOpinion] : ' + error);
     }
   }
 
   cuenta()
   {
    const limite =25;
    var texto = (<HTMLTextAreaElement>document.getElementById('textarea-example')).value.length+1;
    this.mensaje = (limite-texto).toString();

    if(limite-texto==0)
    return false;
   }
 
   sendOpinion()
   {
     if(this.opinion.length>0)
     this.mensaje ="Gracias por enviar tu opinión";
     else
     this.mensaje ="Debes ingresar tu opinión";

   }
 
 }
 
 
 
 
 