import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Films } from '../store/models/films.model';

@Injectable({
  providedIn: "root"
})
export class NgrxService {
  private customersUrl = "http://localhost:3000/moviesList";

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Films[]> {
    return this.http.get<Films[]>(this.customersUrl);
  }

  getCustomerById(payload: number): Observable<Films> {
    return this.http.get<Films>(`${this.customersUrl}/${payload}`);
  }

  createCustomer(films:Films) {
    console.log('films', films)
    return this.http.post<Films>(this.customersUrl, films);
    //return films;
  }

  updateCustomer(customer: Films): Observable<Films> {
    return this.http.patch<Films>(
      `${this.customersUrl}/${customer.id}`,
      customer
    );
  }

  deleteCustomer(payload: number) {
    return this.http.delete(`${this.customersUrl}/${payload}`);
  }
}
