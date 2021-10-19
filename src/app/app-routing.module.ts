import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirPodComponent } from './air-pod/air-pod.component';
import { AndroidComponent } from './android/android.component';
import { AppleWatchComponent } from './apple-watch/apple-watch.component';
import { DienThoaiCuComponent } from './dien-thoai-cu/dien-thoai-cu.component';
import { IpadComponent } from './ipad/ipad.component';
import { MacbookNewComponent } from './macbook-new/macbook-new.component';
import { MacbookproComponent } from './macbookpro/macbookpro.component';
import { PhukienComponent } from './phukien/phukien.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SanphamkhacComponent } from './sanphamkhac/sanphamkhac.component';
import { SectionPriceEachComponent } from './section-price-each/section-price-each.component';
import { SimDataComponent } from './sim-data/sim-data.component';
import { TonyleMobileComponent } from './tonyle-mobile/tonyle-mobile.component';

const routes: Routes = [ 
  { path: 'detail', component: ProductDetailComponent },
  { path: 'dien_thoai_cu', component: DienThoaiCuComponent },
  { path: 'ipad', component: IpadComponent },
  { path: 'macbook_new', component: MacbookNewComponent },
  { path: 'macbookpro', component: MacbookproComponent },
  { path: 'air_pod', component: AirPodComponent },
  { path: 'apple_watch', component: AppleWatchComponent },
  { path: 'tonyle_mobile', component: TonyleMobileComponent },
  { path: 'sim_data', component: SimDataComponent },
  { path: 'android', component: AndroidComponent },
  { path: 'sanphamkhac', component: SanphamkhacComponent },
  { path: 'phukien', component: PhukienComponent },
  { path: '', component: SectionPriceEachComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
