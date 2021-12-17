import { Component, Input, OnInit } from '@angular/core';
import { Secret } from 'src/app/interfaces/Secret';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() secret: Secret = {id: -1, name: '', secret: ''};

  constructor() { }

  ngOnInit(): void {
  }

}
