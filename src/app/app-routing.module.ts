import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'store',
  loadChildren: () => import('./feature-wrapper/feature-routing.module').then(m => m.FeatureRoutingModule)
},
{
  path: 'auth',
  loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
