import { Injectable } from '@angular/core';
import { Secret } from '../interfaces/Secret';
import { SecretService } from './secret.service';

@Injectable({
  providedIn: 'root'
})
export class RemoveModalService {
  public visible: boolean = false;
  public secret: Secret = {id: -1, name: '', secret: ''};

  constructor(private secrets: SecretService) { }

  public show() {
    this.visible = true;
  }

  public hide() {
    this.secret = {id: -1, name: '', secret: ''};
    this.visible = false;
  }

  public remove(secret: Secret) {
    this.secret = secret;
    this.show();
    // this.secrets.removeSecret(id);
  }
}
