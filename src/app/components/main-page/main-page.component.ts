import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Secret } from 'src/app/interfaces/Secret';
import { AuthService } from 'src/app/shared/auth.service';
import { SecretService } from 'src/app/shared/secret.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {

  public secretsList: Secret[] = [];

  constructor(
    private router: Router,
    private user: AuthService,
    private secrets: SecretService,
  ) {}

  ngOnInit(): void {
    this.user.isAuthed.subscribe((isAuthed: boolean | undefined) => {
      if (!isAuthed) this.router.navigate(['/']);

    });
    this.secrets.isUpdated.subscribe((isUpdated: boolean | undefined) => {
      if (isUpdated) {
        this.secrets.loader.hide();
        this.updateSecretsList();
      }
    });
    this.secrets.loader.hide();
  }

  public updateSecretsList() {
    this.secrets.getSecrets().subscribe((secrets: Secret[]) => {
      this.secrets.loader.hide();
      this.secretsList = secrets;
    }, () => {
      this.user.isAuthed.next(false);
    });
  }
}
