import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './compoent/home/home.component';
import { TableDataTableComponent } from './compoent/table-data-table/table-data-table.component';
import { NavbarComponent } from './compoent/navbar/navbar.component';
import { TableDataProductComponent } from './compoent/table-data-product/table-data-product.component';
import { MenuComponent } from './compoent/menu/menu.component';
import { BanhangComponent } from './compoent/banhang/banhang.component';
import { TableDataOderComponent } from './compoent/table-data-oder/table-data-oder.component';
import { QuanLyBaoCaoComponent } from './compoent/quan-ly-bao-cao/quan-ly-bao-cao.component';
import { FormAddNhanVienComponent } from './compoent/form-add-nhan-vien/form-add-nhan-vien.component';
import { FormAddSanPhamnComponent } from './compoent/form-add-san-pham/form-add-san-pham.component';
import { FormAddDonHangComponent } from './compoent/form-add-don-hang/form-add-don-hang.component';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './compoent/login/login.component';
import { ModalComponent } from './compoent/model/modal.component';
import { NgChartsModule } from 'ng2-charts'; // Import ChartsModule

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableDataTableComponent,
    NavbarComponent,
    TableDataProductComponent,
    MenuComponent,
    BanhangComponent,
    TableDataOderComponent,
    QuanLyBaoCaoComponent,
    FormAddNhanVienComponent,
    FormAddSanPhamnComponent,
    FormAddDonHangComponent,
    LoginComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule // Import ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
