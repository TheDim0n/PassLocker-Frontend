import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public enabled: boolean = false;
  public username: string = '';
  public password: string = '';

  constructor() {}

  public validate(): void {
    this.enabled = this.username.length >= 4 && this.password.length >= 8;
  }

  ngOnInit(): void {}
}
