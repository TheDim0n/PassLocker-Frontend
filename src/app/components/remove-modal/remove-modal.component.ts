import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { RemoveModalService } from 'src/app/shared/remove-modal.service';
import { SecretService } from 'src/app/shared/secret.service';

@Component({
  selector: 'app-remove-modal',
  templateUrl: './remove-modal.component.html',
  styleUrls: ['./remove-modal.component.scss'],
})
export class RemoveModalComponent implements OnInit {
  public username: string = '';
  public enabled: boolean = false;
  @Input() secretStr: string = '';

  constructor(
    public state: RemoveModalService,
    private secrets: SecretService
  ) {}

  ngOnInit(): void {
    this.username = this.secrets.user.username;
  }

  public validate() {
    this.enabled =
      this.secretStr === this.username + '/' + this.state.secret.name;
  }

  public remove() {
    this.secrets.removeSecret(this.state.secret.id);
    this.state.visible = false;
  }
}
