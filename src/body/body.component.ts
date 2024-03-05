import { Component } from '@angular/core';
import {interval, Observable} from "rxjs";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  contador: number = 0;

  suma: number = 1+1;
  ngOnInit() {
    // Crear un observable que emita un valor cada segundo
    const timerObservable: Observable<number> = interval(1000);

    // Suscribirse al observable para actualizar el contador
    timerObservable.subscribe(() => {
      this.contador++;
    });
  }
}
