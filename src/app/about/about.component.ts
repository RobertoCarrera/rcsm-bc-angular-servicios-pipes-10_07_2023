import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  nombre_programador = "Roberto Carrera Santa Maria";
  version = 0.1;
  fecha_desarrollo = "07/2023";
}
