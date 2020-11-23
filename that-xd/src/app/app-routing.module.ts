import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CubeComponent } from './cube/cube.component';
import { LostLandComponent } from './lost-land/lost-land.component';

const routes: Routes = [
  { path: '', redirectTo: 'cube', pathMatch: 'full' },
  { path: 'cube', component: CubeComponent },
  { path: '404', component: LostLandComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
