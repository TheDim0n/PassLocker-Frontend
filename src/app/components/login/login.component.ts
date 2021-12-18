import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/auth.service';
import { LoaderService } from 'src/app/shared/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public enabled: boolean = false;
  public username: string = '';
  public password: string = '';

  constructor(
    public loader: LoaderService,
    private user: AuthService,
    private router: Router
  ) {}

  public validate(): void {
    this.enabled = this.username.length >= 4 && this.password.length >= 8;
  }

  ngOnInit(): void {
    this.user.isAuthed.subscribe((isAuthed: boolean | undefined) => {
      if (isAuthed) this.router.navigate(['/main']);
    });
  }

  public authenticate(): void {
    this.loader.show();
    this.user.get_token(this.username, this.password);
    this.loader.hide();
  }
}
