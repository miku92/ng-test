import { Component } from '@angular/core';
import { environment } from 'src/environments/environments.prod';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

const test1 = 'casa '+environment.redisServer


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent{
  title:string='AAA';
  mostraApp=true;
  constructor(private router:Router,private cdr: ChangeDetectorRef){}

  onSubmit() {  
    console.log('Mannaia la puttana'+environment.redisServer)
    this.router.navigate(['/mostra-testo']).then(() => {
      this.mostraApp=false;
      this.cdr.detectChanges();
    });
} 
}


