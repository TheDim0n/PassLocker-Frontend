import { Component, OnInit } from '@angular/core';
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

  constructor(private http: AuthService) {}

  public validate(): void {
    this.enabled = this.username.length >= 4 && this.password.length >= 8;
  }

  ngOnInit(): void {}

  public authenticate(): void {
    this.http.get_token(this.username, this.password);
  }

}
