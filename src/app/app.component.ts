import { Component, OnInit } from "@angular/core";
import { CountryService } from "./country.service";
// import { from } from "rxjs";
import { DataService } from "./services/data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "countries";
  countryName: string;
  public countrylist = [];

  constructor(
    private _countryService: CountryService,
    private data: DataService
  ) {}

  ngOnInit() {
    this._countryService
      .getCountries()
      .subscribe(data => (this.countrylist = data));
  }

  onSelect(countryName) {
    console.log("countrySENT", countryName);
    this.data.changeMessage(countryName);
  }
}
