import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Secret } from 'src/app/interfaces/Secret';
import { RemoveModalService } from 'src/app/shared/remove-modal.service';
import { SecretService } from 'src/app/shared/secret.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() secret: Secret = { id: -1, name: '', secret: '' };
  public copied: boolean = false;

  constructor(private removeService: RemoveModalService) {}

  ngOnInit(): void {}

  public copySecret() {
    this.copied = true;
    navigator.clipboard.writeText(this.secret.secret);
    setTimeout(() => {
      this.copied = false;
    }, 2000);
  }

  public removeCard() {
    this.removeService.remove(this.secret);
  }
}
