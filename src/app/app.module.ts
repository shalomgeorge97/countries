import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CountryService } from "./services/country.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { DataService } from "./services/data.service";

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [CountryService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
