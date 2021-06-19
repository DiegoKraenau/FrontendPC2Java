import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gasto } from '../models/Gasto';

@Injectable({
  providedIn: 'root',
})
export class GastosService {
  url = 'https://app-saver-api.herokuapp.com/outcomes';
  constructor(private http: HttpClient) {}

  getGastos() {
    return this.http.get<Gasto[]>(this.url);
  }

  postGasto(gasto: Gasto) {
    return this.http.post(this.url, gasto);
  }
}
