import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent {
  
  //Pipe i18nSelect
  // nombre: string = 'Nely';
  // genero: string = 'femenino';
  nombre: string = 'Asdrúbal';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla',
  }


  //Pipe i18nPlural
  clientes: string[] = ['María', 'Pedro', 'Carla', 'José', 'Asdrúbal'];

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }


  cambiarCliente() {
    this.nombre = 'Melissa';
    this.genero = 'femenino'
  };

  borrarCliente() {
    this.clientes.pop();
    // this.clientes.shift();
  }


  //KeyValue Pipe
  persona = {
    nombre: 'Asdrúbal',
    edad: 35,
    direccion: 'Barranquilla, Colombia'
  }


   //Json Pipe
   heroes = [ 
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  
  //Async Pipe
  miObservable = interval(2000);  //0,1,2,3,4,5,6
  //miObservable = interval(5000).pipe(tap(() => console.log('interval')));  //0,1,2,3,4,5,6

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500);
  });
}
