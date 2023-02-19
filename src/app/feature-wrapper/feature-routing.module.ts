import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureWrapperComponent } from './feature-wrapper.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { ShopComponent } from './features/shop/shop.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: '',
        component: FeatureWrapperComponent,
        children: [
            { path: 'products', component: ShopComponent },
            { path: 'products/:id', component: ProductDetailsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule { }