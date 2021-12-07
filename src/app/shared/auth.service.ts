import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public token: string = '';
  public username: string = '';

  constructor(private http: HttpClient) {}

  public get_token(username: string, password: string): void {
    const options = {
      headers: new HttpHeaders({
        accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    this.http.post(
      'http://localhost:8000/users/token/',
      `username=${username}&password=${password}`,
      options
    ).subscribe((data: any) => {
      this.token = data['access_token'];
      this.username = username;
    });
  }
}
