import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "../header/header.component";
import {BodyComponent} from "../body/body.component";
import {FooterComponent} from "../footer/footer.component";
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BodyComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curriculum-Website';
  contador: number = 0;

  ngOnInit() {
    // Crear un observable que emita un valor cada segundo
    const timerObservable: Observable<number> = interval(1000);

    // Suscribirse al observable para actualizar el contador
    timerObservable.subscribe(() => {
      this.contador++;
    });
  }


}
