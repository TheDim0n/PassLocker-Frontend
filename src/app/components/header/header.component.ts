import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public username: string = '';

  constructor(private http: AuthService) { }

  ngOnInit(): void {
    this.username = this.http.username;
  }

}
