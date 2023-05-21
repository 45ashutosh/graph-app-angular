import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphComponent } from './graph/graph.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: 'graph', component: GraphComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'new-page', component: NewPageComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
