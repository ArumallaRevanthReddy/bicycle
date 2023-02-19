import { NgModule } from "@angular/core";
import { ProductDetailsComponent } from "./features/product-details/product-details.component";
import { ShopComponent } from "./features/shop/shop.component";
import { FeatureWrapperComponent } from "./feature-wrapper.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FeatureRoutingModule } from "./feature-routing.module";

@NgModule({
    declarations: [
        FeatureWrapperComponent,
        ShopComponent,
        ProductDetailsComponent
    ],
    imports: [BrowserModule, RouterModule, FeatureRoutingModule],
    exports: [
        FeatureWrapperComponent,
        ShopComponent,
        ProductDetailsComponent
    ],
    providers: [],
})
export class FeatureModule { }