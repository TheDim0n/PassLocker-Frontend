import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Secret } from 'src/app/interfaces/Secret';
import { AuthService } from 'src/app/shared/auth.service';
import { LoaderService } from 'src/app/shared/loader.service';
import { SecretService } from 'src/app/shared/secret.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {

  public secretsList: Secret[] = [];

  constructor(
    private loader: LoaderService,
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
        this.updateSecretsList();
      }
    });
  }

  public updateSecretsList() {
    this.loader.show();
    this.secrets.getSecrets().subscribe({
      next: (secrets: Secret[]) => {
        this.secretsList = secrets;
      },
      error: () => {
        this.user.logout();
      },
      complete: () => {
        this.loader.hide();
      }
    });
  }
}
