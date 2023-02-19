import { NgModule } from "@angular/core";
import { ProductDetailsComponent } from "./features/product-details/product-details.component";
import { ShopComponent } from "./features/shop/shop.component";
import { FeatureWrapperComponent } from "./feature-wrapper.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FeatureRoutingModule } from "./feature-routing.module";
import { ClickOutsideDirective } from "src/utils/directives/click-outside.directive";

@NgModule({
    declarations: [
        FeatureWrapperComponent,
        ShopComponent,
        ProductDetailsComponent,
        ClickOutsideDirective
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