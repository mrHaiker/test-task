import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { isUndefined } from 'util';
import { RowData } from '../row/row.component';

export class List {
  date: any;
  value: RowData[];
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() value: any;
  public selectList: RowData[] = [];
  public list: List[] = [
    { date: new Date() , value: [{
        Country_name: '2',
        League_name: '2',
        Match_status: '2',
        Match_date: '2',
        Match_time: '2',
      }]},
    { date: new Date() , value: [new RowData()]}
  ];
  constructor(
    private service: AppService
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (isUndefined(this.value)) return;

    this.service.getData(this.value['country'], this.value['country']).subscribe(
      arr => {
        if (!arr.length) return;

        arr.map(data => {
          this.list.push({
            date: new Date(),
            value: data
          });
        });
      }
    );
  }


  select(item: List) {
    this.selectList = item.value;
  }
}
