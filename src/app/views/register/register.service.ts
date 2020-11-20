import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class RegisterService {

  baseUrl = environment.baseUrl;
  constructor(
    private http: HttpClient,
  ) { }

  find(cpf) {
    return this.http.get(`${this.baseUrl}/users`, {
      params: {
        cpf: cpf
      }
    })
  }

  register(user) {
    return this.http.post(`${this.baseUrl}/users`, {
      ...user
    })
  }
}
