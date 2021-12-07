import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthed: BehaviorSubject<boolean | undefined> = new BehaviorSubject<
    boolean | undefined
  >(undefined);
  public token: string = '';
  public username: string = '';

  constructor(private http: HttpClient) {
    this.isAuthed.next(false);
  }

  public get_token(username: string, password: string): void {
    const options = {
      headers: new HttpHeaders({
        accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    this.http
      .post(
        'http://localhost:8000/users/token/',
        `username=${username}&password=${password}`,
        options
      )
      .subscribe({
        next: (data: any) => {
          this.token = data['access_token'];
          this.username = username;
          this.isAuthed.next(true);
        },
        error: () => this.isAuthed.next(false),
      });
  }
}
