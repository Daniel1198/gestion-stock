import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PanelComponent } from './panel/panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderModule } from '../loader/loader.module';


@NgModule({
  declarations: [
    PanelComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxPaginationModule,
    LoaderModule
  ]
})
export class AdminModule { }
