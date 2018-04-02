import { Component, Input, OnInit } from '@angular/core';

export class RowData {
  Country_name: string;
  League_name: string;
  Belgium: string;
  Match_date: string;
  Match_time: string;
}

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  @Input() public value: RowData;
  constructor() { }

  ngOnInit() {
    console.log('value', this.value);
  }

}
