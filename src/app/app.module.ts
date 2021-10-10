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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // other imports   
  FacebookModule.forRoot(),
    NgbModule,
    AppRoutingModule,
    SafePipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
