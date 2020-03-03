import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { DataService } from "../../services/data.service";
import { CountryService } from "../../services/country.service";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
@Component({
  selector: "app-app-home",
  templateUrl: "./app-home.component.html",
  styleUrls: ["./app-home.component.css"]
})
export class AppHomeComponent implements OnInit, OnDestroy {
  countryName: string;
  public countrydetails;
  private unsubscribe = new Subject();

  constructor(private data: DataService, private country: CountryService) {}

  ngOnInit(): void {
    this.data.currentMessage
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(message => {
        this.countryName = message;

        console.log("countryRECEIVED in home", this.countryName);

        this.country
          .getCountry(this.countryName)
          .subscribe(data => (this.countrydetails = data));
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    console.log("home destroy");
  }
}
