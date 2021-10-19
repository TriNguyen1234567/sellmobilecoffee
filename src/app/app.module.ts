import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainvisComponent } from './mainvis/mainvis.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { SectionEachComponent } from './section-each/section-each.component';
import { SectionPriceEachComponent } from './section-price-each/section-price-each.component';
import { ProductDetailComponent, SafePipe } from './product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FacebookModule } from 'ngx-facebook';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SafePipeModule } from 'safe-pipe';
import { DienThoaiCuComponent } from './dien-thoai-cu/dien-thoai-cu.component';
import { IpadComponent } from './ipad/ipad.component';
import { MacbookNewComponent } from './macbook-new/macbook-new.component';
import { AirPodComponent } from './air-pod/air-pod.component';
import { AppleWatchComponent } from './apple-watch/apple-watch.component';
import { SimDataComponent } from './sim-data/sim-data.component';
import { TonyleMobileComponent } from './tonyle-mobile/tonyle-mobile.component';
import {GalleriaModule} from 'primeng/galleria';
import { PhukienComponent } from './phukien/phukien.component';
import { SanphamkhacComponent } from './sanphamkhac/sanphamkhac.component';
import { AndroidComponent } from './android/android.component';
import { MacbookproComponent } from './macbookpro/macbookpro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainvisComponent,
    FooterComponent,
    SectionComponent,
    SectionEachComponent,
    SectionPriceEachComponent,
    ProductDetailComponent,
    SafePipe,
    DienThoaiCuComponent,
    IpadComponent,
    MacbookNewComponent,
    AirPodComponent,
    AppleWatchComponent,
    SimDataComponent,
    TonyleMobileComponent,
    PhukienComponent,
    SanphamkhacComponent,
    AndroidComponent,
    MacbookproComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // other imports   
  FacebookModule.forRoot(),
    NgbModule,
    AppRoutingModule,
    SafePipeModule,
    GalleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
