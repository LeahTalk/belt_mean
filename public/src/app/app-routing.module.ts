import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'pets',component: HomeComponent },
  { path: 'pets/new',component: AddComponent },
  { path: 'pets/:id',component: DetailsComponent },
  { path: 'pets/:id/edit',component: EditComponent },
  { path: '', pathMatch: 'full', redirectTo: '/pets' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
