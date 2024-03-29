import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { ListProductComponent } from './list-product/list-product.component';


const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'products-add-1', component: ProductAddForms1Component ,canActivate:[LoginGuard]},
  { path: 'products-add-2', component: ProductAddForms2Component },
  { path: 'listProduct', component: ListProductComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products/category/:categoryId', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
