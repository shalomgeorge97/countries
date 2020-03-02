import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { CountryService } from "src/app/services/country.service";

@Component({
  selector: "app-app-currency",
  templateUrl: "./app-currency.component.html",
  styleUrls: ["./app-currency.component.css"]
})
export class AppCurrencyComponent implements OnInit {
  countryName: string;
  public countrydetails;

  constructor(private data: DataService, private country: CountryService) {}

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => {
      this.countryName = message;

      console.log("countryRECEIVED in home", this.countryName);

      this.country
        .getCountry(this.countryName)
        .subscribe(data => (this.countrydetails = data));
    });
  }
}
