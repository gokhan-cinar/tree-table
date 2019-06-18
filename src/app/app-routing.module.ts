import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeTableComponent } from './routes/tree-table/tree-table.component';
import { TestTableComponent } from './routes/test-table/test-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: TreeTableComponent },
  { path: 'test-table', component: TestTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
