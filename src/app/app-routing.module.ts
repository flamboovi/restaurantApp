import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddResaturantComponent } from './add-resaturant/add-resaturant.component';
import { EditResaturantComponent } from './edit-resaturant/edit-resaturant.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'add-restaurant', component:AddResaturantComponent},
  {path:'edit-restaurant/:id', component:EditResaturantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
