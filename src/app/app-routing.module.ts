import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsultListComponent } from './consult-list/consult-list.component';
import { ConsultCensorsComponent } from './consult-censors/consult-censors.component';

const routes: Routes = [
  { path: '', redirectTo: '/econsult', pathMatch: 'full' },
  { path: 'econsult', component: ConsultListComponent },
  { path: 'econsult/:eConsultId/censors/:imageId', component: ConsultCensorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
