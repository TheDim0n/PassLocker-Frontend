import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public enabled: boolean = false;
  public username: string = '';
  public password: string = '';

  constructor(private http: AuthService, private router: Router) {}

  public validate(): void {
    this.enabled = this.username.length >= 4 && this.password.length >= 8;
  }

  ngOnInit(): void {
    this.http.isAuthed.subscribe((isAuthed: boolean | undefined) => {
      if (isAuthed) this.router.navigate(['/main']);
    });
  }

  public authenticate(): void {
    this.http.get_token(this.username, this.password);
  }

}
