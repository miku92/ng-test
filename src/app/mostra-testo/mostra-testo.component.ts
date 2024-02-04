import { Component,OnInit } from '@angular/core';
import { environment } from 'src/environments/environments.prod';

@Component({
  selector: 'app-mostra-testo',
  templateUrl: './mostra-testo.component.html',
  styleUrls: ['./mostra-testo.component.css']
})
export class MostraTestoComponent implements OnInit{

  ngOnInit(): void {
    console.log(environment.redisServer);
  }

}
