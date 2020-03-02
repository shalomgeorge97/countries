import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../../services/data.service";
import { CountryService } from "../../services/country.service";
@Component({
  selector: "app-app-home",
  templateUrl: "./app-home.component.html",
  styleUrls: ["./app-home.component.css"]
})
export class AppHomeComponent implements OnInit {
  countryName: string;
  public countrydetails = [];

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
