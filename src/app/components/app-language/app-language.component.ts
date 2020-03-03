import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { CountryService } from "src/app/services/country.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-app-language",
  templateUrl: "./app-language.component.html",
  styleUrls: ["./app-language.component.css"]
})
export class AppLanguageComponent implements OnInit {
  countryName: string;
  public countrydetails;
  private unsubscribe = new Subject();

  constructor(private data: DataService, private country: CountryService) {}

  ngOnInit(): void {
    this.data.currentMessage
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(message => {
        this.countryName = message;

        console.log("countryRECEIVED in lang", this.countryName);

        this.country
          .getCountry(this.countryName)
          .subscribe(data => (this.countrydetails = data));
      });
  }

  noOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    console.log("Lang destroy");
  }
}
