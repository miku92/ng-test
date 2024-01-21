import { Component } from '@angular/core';
// import { environment } from 'src/environments/environments';


// const test1 = environment.firebase.nome 
const test1 = `${GITHUB_ACTION.Provo.nome}`;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = test1;
}
