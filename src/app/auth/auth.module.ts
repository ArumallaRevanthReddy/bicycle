import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
    declarations: [LoginComponent, RegisterComponent],
    imports: [BrowserModule, RouterModule, AuthRoutingModule],
    exports: [LoginComponent, RegisterComponent],
    providers: [],
})
export class AuthModule { }