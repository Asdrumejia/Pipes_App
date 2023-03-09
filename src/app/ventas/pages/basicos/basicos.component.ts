import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent {

  nombreLower: string = 'asdrúbal';
  nombreUpper: string = 'ASDRÚBAL';
  nombreCompleto: string = 'asdRÚbaL mEJía';

  fecha: Date = new Date(); //El dia de hoy


}
