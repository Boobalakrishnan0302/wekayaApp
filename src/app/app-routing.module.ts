import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'lang', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'lang', loadChildren: './pages/lang/lang.module#LangPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'action', loadChildren: './pages/action/action.module#ActionPageModule' },
  { path: 'my-home', loadChildren: './pages/my-home/my-home.module#MyHomePageModule' },
  { path: 'product', loadChildren: './pages/product/product.module#ProductPageModule' },
  { path: 'order-form', loadChildren: './pages/order-form/order-form.module#OrderFormPageModule' },
  { path: 'payment-order', loadChildren: './pages/payment-order/payment-order.module#PaymentOrderPageModule' },
  { path: 'medical-officer', loadChildren: './pages/medical-officer/medical-officer.module#MedicalOfficerPageModule' },
  { path: 'setting', loadChildren: './pages/setting/setting.module#SettingPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
