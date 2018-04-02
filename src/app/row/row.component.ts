import { Component, Input, OnInit } from '@angular/core';
import { TeamResult } from '../app.service';


@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  @Input() public value: TeamResult;
  constructor() { }

  ngOnInit() {
  }

}
