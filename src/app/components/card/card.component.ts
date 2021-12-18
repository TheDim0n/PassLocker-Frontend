import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Secret } from 'src/app/interfaces/Secret';
import { RemoveModalService } from 'src/app/shared/remove-modal.service';
import { SecretService } from 'src/app/shared/secret.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() secret: Secret = { id: -1, name: '', secret: '' };

  constructor(
    private secretService: SecretService,
    private removeService: RemoveModalService
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
      this.removeService.hide();
  }

  public copySecret() {
    navigator.clipboard.writeText(this.secret.secret);
  }

  public removeCard() {
    this.removeService.remove(this.secret);
    // this.secretService.removeSecret(this.secret.id);
  }

}
