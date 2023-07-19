import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  @Input() charactersData: any;
  id = 0;

  ngOnInit(data: any): void{

    this.charactersData = data;
  }

  

}