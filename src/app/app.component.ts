import { Component, OnInit } from "@angular/core";
import { CountryService } from "./country.service";
import { from } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "countries";
  countryName: string;
  public countrylist = [];

  constructor(private _countryService: CountryService) {}

  ngOnInit() {
    this._countryService
      .getCountries()
      .subscribe(data => (this.countrylist = data));
  }

  onSelect(data) {
    this.countryName = data;
  }
}
