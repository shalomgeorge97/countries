import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { CountryService } from "src/app/services/country.service";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: "app-app-currency",
  templateUrl: "./app-currency.component.html",
  styleUrls: ["./app-currency.component.css"]
})
export class AppCurrencyComponent implements OnInit {
  countryName: string;
  public countrydetails;
  private unsubscribe = new Subject();

  constructor(private data: DataService, private country: CountryService) {}

  ngOnInit(): void {
    this.data.currentMessage
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(message => {
        this.countryName = message;

        console.log("countryRECEIVED in curr", this.countryName);

        this.country
          .getCountry(this.countryName)
          .subscribe(data => (this.countrydetails = data));
      });
  }

  noOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    console.log("currency destroy");
  }
}
