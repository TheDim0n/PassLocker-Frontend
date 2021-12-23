import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthed: BehaviorSubject<boolean | undefined> = new BehaviorSubject<
    boolean | undefined
  >(undefined);
  public token: string = '';
  public username: string = '';

  constructor(private http: HttpClient, private cookie: CookieService) {
    if (this.cookie.check("token")) {
      this.token = this.cookie.get("token");
      this.username = this.cookie.get("username");
      this.isAuthed.next(true);
    } else {
      this.isAuthed.next(false);
    }
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
        environment.apiUrl+'/users/token/',
        `username=${username}&password=${password}`,
        options
      )
      .subscribe({
        next: (data: any) => {
          this.token = data['access_token'];
          this.username = username;
          this.cookie.set("token", this.token);
          this.cookie.set("username", this.username);
          this.isAuthed.next(true);
        },
        error: () => this.isAuthed.next(false),
      });
  }

  public getAccessTokenHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
  }

  public logout(): void {
    this.username = '';
    this.token = '';
    this.isAuthed.next(false);
  }
}
