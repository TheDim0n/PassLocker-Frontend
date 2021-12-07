import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor(private router: Router, private http: AuthService) {}

  ngOnInit(): void {
    this.http.isAuthed.subscribe((isAuthed: boolean | undefined) => {
      if (!isAuthed) this.router.navigate(['/']);
    });
  }
}
