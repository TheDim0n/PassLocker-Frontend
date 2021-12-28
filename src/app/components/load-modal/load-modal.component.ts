import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/shared/loader.service';

@Component({
  selector: 'app-load-modal',
  templateUrl: './load-modal.component.html',
  styleUrls: ['./load-modal.component.scss']
})
export class LoadModalComponent implements OnInit {

  constructor(public state: LoaderService) { }

  ngOnInit(): void {
  }

}
