import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-app-home",
  templateUrl: "./app-home.component.html",
  styleUrls: ["./app-home.component.css"]
})
export class AppHomeComponent implements OnInit {
  countryName: string;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => {
      this.countryName = message;

      console.log("countryRECEIVED", this.countryName);
    });
  }
}
