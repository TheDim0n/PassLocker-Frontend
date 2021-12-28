import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CloseModalService {

  public visible: boolean = false;

  constructor() { }

  public show() {
    this.visible = true;
  }

  public close() {
    this.visible = false;
  }
}
