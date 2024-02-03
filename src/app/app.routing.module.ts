import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MostraTestoComponent } from './mostra-testo/mostra-testo.component';


const routes: Routes = [{ path: 'mostra-testo', component: MostraTestoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }