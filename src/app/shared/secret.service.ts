import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Secret, SecretCreate } from '../interfaces/Secret';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class SecretService {
  constructor(private http: HttpClient, private user: AuthService) {}

  public getSecrets(): Observable<Secret[]> {
    return this.http.get<Secret[]>(environment.apiUrl + '/secrets/', {
      headers: this.user.getAccessTokenHeader(),
    });
  }

  public createSecret(newSecret: SecretCreate) {
    this.http.post(environment.apiUrl + '/secrets/', newSecret, {
      headers: this.user.getAccessTokenHeader(),
    }).subscribe();
  }
}
