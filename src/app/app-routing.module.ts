import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SectionPriceEachComponent } from './section-price-each/section-price-each.component';

const routes: Routes = [ { path: 'detail', component: ProductDetailComponent },{ path: '', component: SectionPriceEachComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
