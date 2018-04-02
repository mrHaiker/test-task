import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AppService, TeamResult } from '../app.service';
import { isUndefined } from 'util';

export class List {
  date: any;
  value: TeamResult[];
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() value: any;
  public selectList: TeamResult[] = [];
  public list: List[] = [];
  constructor(
    private service: AppService
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (isUndefined(this.value)) return;

    this.service.getData(this.value['country'], this.value['league']).subscribe(
      arr => {
        console.log('arr', arr);
        if (!arr.length) return;

        this.list.push({
          date: new Date(),
          value: arr
        });

        this.selectList = arr;
      }
    );
  }


  select(item: List) {
    this.selectList = item.value;
  }
}
