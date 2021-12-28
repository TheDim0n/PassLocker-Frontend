import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { CloseModalService } from 'src/app/shared/close-modal.service';
import { environment } from 'src/environments/environment';
import { AddSecretComponent } from '../add-secret/add-secret.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isExpanded: boolean = false;

  public username: string = '';

  constructor(
    public user: AuthService,
    public addSecretModalService: CloseModalService
  ) {}

  ngOnInit(): void {}

  public toggle(): void {
    this.isExpanded = !this.isExpanded;
  }

  public logout(): void {
    this.user.logout();
    this.isExpanded = false;
  }

  public showAddModal() {
    this.isExpanded = false;
    this.addSecretModalService.show();
  }
}
