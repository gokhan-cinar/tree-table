import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeTableComponent } from './tree-table/tree-table.component';

const routes: Routes = [
  { path: 'dashboard', component: TreeTableComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
