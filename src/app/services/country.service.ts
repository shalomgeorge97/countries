import { Injectable, ErrorHandler } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { ICountries, ICountry } from "../shared/interfaces";
// import "rxjs/add/operator/catch";
// import "rxjs/add/operator/throw";

@Injectable({
  providedIn: "root"
})
export class CountryService {
  private _countriesurl: string =
    "https://restcountries.eu/rest/v2/all?fields=name;alpha3Code";

  private _countryurl: string = "https://restcountries.eu/rest/v2/alpha/";

  constructor(private http: HttpClient) {}

  getCountries(): Observable<ICountries[]> {
    return this.http.get<ICountries[]>(this._countriesurl);
    // .catch(this.errorHandler);
  }

  getCountry(code): Observable<ICountry> {
    return this.http.get<ICountry>(this._countryurl + code);
    // .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server error");
  }
}
