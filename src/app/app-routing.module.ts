import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppLanguageComponent } from "./components/app-language/app-language.component";
import { AppHomeComponent } from "./components/app-home/app-home.component";
import { AppCurrencyComponent } from "./components/app-currency/app-currency.component";
import { AppPagenotfoundComponent } from "./components/app-pagenotfound/app-pagenotfound.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: AppHomeComponent
  },
  {
    path: "language",
    component: AppLanguageComponent
  },
  {
    path: "currency",
    component: AppCurrencyComponent
  },
  {
    path: "**",
    component: AppPagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  AppHomeComponent,
  AppLanguageComponent,
  AppCurrencyComponent,
  AppPagenotfoundComponent
];
