import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environments.prod';
import { Router } from '@angular/router';

const test1 = 'casa '+environment.redisServer


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title:string='AAA';
  constructor(private router:Router){}


  ngOnInit(){
  }
  onSubmit() {  
    console.log('Mannaia la puttana'+environment.redisServer)
    this.router.navigateByUrl('/mostra-testo');
} 
}


