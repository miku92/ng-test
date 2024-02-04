import { Component,OnInit } from '@angular/core';
import { environment } from 'src/environments/environments.prod';
import { Observable,Subject } from 'rxjs';


@Component({
  selector: 'app-mostra-testo',
  templateUrl: './mostra-testo.component.html',
  styleUrls: ['./mostra-testo.component.css']
})
export class MostraTestoComponent implements OnInit{
  valoreOsservato: string='123';
  private variabileDaOsservare: string | undefined;
  // Osservabile
  private variabileOsservabileSubject: Subject<string> = new Subject<string>();
  variabileOsservabile$: Observable<string> = this.variabileOsservabileSubject.asObservable();


  ngOnInit(): void {
    this.variabileOsservabile$.subscribe((valore) => {
      this.valoreOsservato = valore;
    });
    console.log(environment.redisServer);
  }

}
