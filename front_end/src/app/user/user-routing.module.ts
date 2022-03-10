import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { UserComponent } from './user.component';

const routes: Routes = [{ path: '', component: UserComponent },
{ path: 'hierarchy', component: HierarchyComponent },
// { path: '/hierarchy', loadChildren: () => import('./hierarchy/hierarchy.component').then(m => m.HierarchyComponent) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
