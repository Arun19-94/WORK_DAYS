import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UserComponent,
    HierarchyComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ], exports:[
    HierarchyComponent
  ]
})
export class UserModule { }
