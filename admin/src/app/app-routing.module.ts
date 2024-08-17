import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compoent/home/home.component';
import { TableDataTableComponent } from './compoent/table-data-table/table-data-table.component';
import { TableDataProductComponent } from './compoent/table-data-product/table-data-product.component';
import { BanhangComponent } from './compoent/banhang/banhang.component';
import { TableDataOderComponent } from './compoent/table-data-oder/table-data-oder.component';
import { QuanLyBaoCaoComponent } from './compoent/quan-ly-bao-cao/quan-ly-bao-cao.component';
import { FormAddNhanVienComponent } from './compoent/form-add-nhan-vien/form-add-nhan-vien.component';
import { FormAddSanPhamnComponent } from './compoent/form-add-san-pham/form-add-san-pham.component';
import { FormAddDonHangComponent } from './compoent/form-add-don-hang/form-add-don-hang.component';
import { LoginComponent } from './compoent/login/login.component';
import { MenuComponent } from './compoent/menu/menu.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'table-data-table', component: TableDataTableComponent},
  {path: 'table-data-product', component: TableDataProductComponent},
  {path: 'banhang', component: BanhangComponent},
  {path: 'table-data-oder', component: TableDataOderComponent},
  {path: 'quan-ly-bao-cao', component: QuanLyBaoCaoComponent},
  {path: 'form-add-nhan-vien', component: FormAddNhanVienComponent},
  {path: 'form-add-san-pham', component: FormAddSanPhamnComponent},
  {path: 'form-add-don-hang', component: FormAddDonHangComponent},
  {path:'login', component: LoginComponent  },
  { path: '', component: MenuComponent, canActivate: [AuthGuard] }, // Bảo vệ route này

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
