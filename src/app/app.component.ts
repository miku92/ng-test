import { Component } from '@angular/core';
import { environment } from 'src/environments/environments.prod';


const test1 = 'casa '+environment.redisServer
// const test1 = `${{ secrets.varia}}`;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = test1;
}
