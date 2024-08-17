import { CategoryComponent } from './compoent/category/category.component';
import { ScrollService } from './Service/scroll.service';
import { ElementsComponent } from './compoent/elements/elements.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compoent/home/home.component';
import { BlogComponent } from './compoent/blog/blog.component';
import { CartComponent } from './compoent/cart/cart.component';
import { CheckoutComponent } from './compoent/checkout/checkout.component';
import { ConfirmationComponent } from './compoent/confirmation/confirmation.component';
import { ContactComponent } from './compoent/contact/contact.component';
import { LoginComponent } from './compoent/login/login.component';
import { SingleBlogComponent } from './compoent/single-blog/single-blog.component';
import { SingleProductComponent } from './compoent/single-product/single-product.component';
import { TrackingComponent } from './compoent/tracking/tracking.component';
import { VnpayReturnComponent } from './vnpay-return/vnpay-return.component';




const routes: Routes = [
  { path: 'payment-return', component: VnpayReturnComponent },
  {path: '', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'cart', component: CartComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'confirmation', component: ConfirmationComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'elements', component: ElementsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'single-blog', component: SingleBlogComponent},
  {path:'single-product/:id', component: SingleProductComponent},
  {path: 'tracking', component: TrackingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ScrollService]
})
export class AppRoutingModule { }
