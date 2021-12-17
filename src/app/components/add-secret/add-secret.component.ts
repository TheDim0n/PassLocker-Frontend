import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SecretCreate } from 'src/app/interfaces/Secret';
import { AuthService } from 'src/app/shared/auth.service';
import { CloseModalService } from 'src/app/shared/close-modal.service';
import { SecretService } from 'src/app/shared/secret.service';

@Component({
  selector: 'app-add-secret',
  templateUrl: './add-secret.component.html',
  styleUrls: ['./add-secret.component.scss'],
})
export class AddSecretComponent implements OnInit {
  public enabled: boolean = false;
  public secret: SecretCreate = { name: '', secret: '' };

  constructor(
    public state: CloseModalService,
    private secretService: SecretService
  ) {}

  ngOnInit(): void {}

  public validate() {
    this.enabled = this.secret.name.length > 0 && this.secret.secret.length > 0;
  }

  public createSecret() {
    this.secretService.createSecret(this.secret);
    this.secret = { name: '', secret: '' };
  }
}
