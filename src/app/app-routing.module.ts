import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SurvivedComponent} from './survived/survived.component';
import {UserInputComponent} from './user-input/user-input.component';
import {DrownedComponent} from './drowned/drowned.component';

const routes: Routes = [
  { path: 'survived', component: SurvivedComponent },
  { path: 'drowned', component: DrownedComponent },
  { path: '', component: UserInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
