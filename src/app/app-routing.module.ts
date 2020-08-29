import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopListComponent} from './shopList/shop-list/shop-list.component';


const routes: Routes = [
  {path:'shoplist', component:ShopListComponent},
  {path: '', redirectTo: 'shoplist', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
