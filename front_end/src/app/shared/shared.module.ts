import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthInterceptor } from '../service/auth.interceptor';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatIconModule} from '@angular/material/icon'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxFlowchartModule } from 'ngx-flowchart';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    NgxChartsModule,
    NgxFlowchartModule
    // SidebarComponent
    
  ],
  exports: [
    // AuthInterceptor
    SidebarComponent,
    NgxFlowchartModule,
    NgxChartsModule
  ]
})
export class SharedModule { }
