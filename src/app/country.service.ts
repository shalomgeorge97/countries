import { Injectable, ErrorHandler } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { ICountries } from "./shared/interfaces";

@Injectable({
  providedIn: "root"
})
export class CountryService {
  private _url: string =
    "https://restcountries.eu/rest/v2/all?fields=name;alpha3Code";

  constructor(private http: HttpClient) {}

  getCountries(): Observable<ICountries[]> {
    return this.http.get<ICountries[]>(this._url);
  }
}
