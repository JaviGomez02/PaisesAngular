import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/PaisService.service';



@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent  {


   constructor(private paisService: PaisService) {}

  busqueda:string='';
   getPaises(){
     this.paisService.buscarPais(this.busqueda);
      this.busqueda='';
   }

   get results(): Pais[]{
     return this.paisService.results;
   }

   get error(): string{
     return this.paisService.error;
   }

}
