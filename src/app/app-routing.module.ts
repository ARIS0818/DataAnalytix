import { ConnectionComponent } from './component/connection/connection.component';
import { ActivitesComponent } from './component/activites/activites.component';
import { ProposComponent } from './component/propos/propos.component';
import { ReferenceComponent } from './component/reference/reference.component';
import { RecrutementComponent } from './component/recrutement/recrutement.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: AccueilComponent
  },
  {
    path:'Accueil',
    component: AccueilComponent
  },
  {
    path:'Recrutement',
    component: RecrutementComponent
  },
  {
    path:'References',
    component: ReferenceComponent
  },
  {
    path:'Propos',
    component: ProposComponent
  },
  {
    path:'Activites',
    component: ActivitesComponent
  },
  {
    path: 'Connection',
    component: ConnectionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
