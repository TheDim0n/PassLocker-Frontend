import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Secret, SecretCreate } from '../interfaces/Secret';
import { AuthService } from './auth.service';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root',
})
export class SecretService {
  public isUpdated: BehaviorSubject<boolean | undefined> = new BehaviorSubject<
    boolean | undefined
  >(undefined);
  constructor(
    private http: HttpClient,
    public user: AuthService,
  ) {
    this.isUpdated.next(true);
  }

  public getSecrets(): Observable<Secret[]> {
    return this.http.get<Secret[]>(environment.apiUrl + '/secrets/', {
      headers: this.user.getAccessTokenHeader(),
    });
  }

  public createSecret(newSecret: SecretCreate) {
    this.http
      .post(environment.apiUrl + '/secrets/', newSecret, {
        headers: this.user.getAccessTokenHeader(),
      })
      .subscribe({
        next: () => {
          this.isUpdated.next(true);
        },
        error: () => this.isUpdated.next(false),
      });
  }

  public removeSecret(id: number) {
    this.http.delete(`${environment.apiUrl}/secrets/${id}/`, {
      headers: this.user.getAccessTokenHeader(),
    }).subscribe({
      next: () => {
        this.isUpdated.next(true);
      },
      error: () => this.isUpdated.next(false),
    });
  }
}
