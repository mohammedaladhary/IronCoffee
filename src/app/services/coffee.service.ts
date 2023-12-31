import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private readonly apiUrl = 'https://ih-coffees-api-42e1df06199a.herokuapp.com/coffees';

  constructor(private http: HttpClient) {}

  createCoffee(newCoffee: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/new`, newCoffee);
  }

  getAllCoffees(): Observable<any[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<any[]>(url);
  }
  
  getCoffeeById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get(url);
  }


  getRandomCoffee(): Observable<any> {
    const url = `${this.apiUrl}/random`;
    return this.http.get(url);
  }

}