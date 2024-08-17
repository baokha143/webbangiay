import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compoent/header/header.component';
import { FooterComponent } from './compoent/footer/footer.component';
import { HomeComponent } from './compoent/home/home.component';
import { BlogComponent } from './compoent/blog/blog.component';
import { CartComponent } from './compoent/cart/cart.component';
import { CategoryComponent } from './compoent/category/category.component';
import { CheckoutComponent } from './compoent/checkout/checkout.component';
import { ConfirmationComponent } from './compoent/confirmation/confirmation.component';
import { ContactComponent } from './compoent/contact/contact.component';
import { ElementsComponent } from './compoent/elements/elements.component';
import { LoginComponent } from './compoent/login/login.component';
import { SingleBlogComponent } from './compoent/single-blog/single-blog.component';
import { SingleProductComponent } from './compoent/single-product/single-product.component';
import { TrackingComponent } from './compoent/tracking/tracking.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PayComponent } from './compoent/pay/pay.component';
import { VnpayReturnComponent } from './vnpay-return/vnpay-return.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    CartComponent,
    CategoryComponent,
    CheckoutComponent,
    ConfirmationComponent,
    ContactComponent,
    ElementsComponent,
    LoginComponent,
    SingleBlogComponent,
    SingleProductComponent,
    TrackingComponent,
    PayComponent,
    VnpayReturnComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
