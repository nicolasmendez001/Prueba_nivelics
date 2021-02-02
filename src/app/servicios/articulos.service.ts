import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  storeKey = "data";

  constructor(private http: HttpClient, private transferState: TransferState) {

  }

  // getData() {
  //   return this.http.get<any>(path).pipe(
  //     map(data => data.items)
  //   )
  // }

  getData() {
    const path = 'https://d2rpzhocglww2h.cloudfront.net/test/test.json';
    return this.http.get(path);
  }

}
