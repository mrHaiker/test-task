import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AppService {

  public api = '//apifootball.com/api/';
  private key = '8494fe0d0763bf474a87cea47f67cc681c2dfc91962a839885fedf8de23a2e9c';
  constructor(
    private http: Http
  ) { }

  getData(firstTeam, secondTeam): Observable<any> {
    return this.http.get(`${this.api}?action=get_H2H&firstTeam=${firstTeam}&secondTeam=${secondTeam}&APIkey=${this.key}`)
      .map(res => res.json);
  }
}
