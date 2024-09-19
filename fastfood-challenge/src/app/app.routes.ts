import { RouterModule, Routes } from '@angular/router';
import { PosComponent } from './pos/pos.component';
import { KichenComponent } from './kichen/kichen.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'pos',component:PosComponent},
    {path:'kichen',component:KichenComponent},
    {path:'delivery',component:DeliveryComponent}

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
