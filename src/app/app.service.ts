import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


export class TeamResult {
  country_id: string;
  country_name: string;
  league_id: string;
  league_name: string;
  match_awayteam_halftime_score: string;
  match_awayteam_name: string;
  match_awayteam_score: string;
  match_date: string;
  match_hometeam_halftime_score: string;
  match_hometeam_name: string;
  match_hometeam_score: string;
  match_id: string;
  match_live: string;
  match_status: string;
  match_time: string;
}

@Injectable()
export class AppService {

  public api = '//apifootball.com/api/';
  private key = '8494fe0d0763bf474a87cea47f67cc681c2dfc91962a839885fedf8de23a2e9c';
  constructor(
    private http: Http
  ) { }

  getData(firstTeam, secondTeam): Observable<TeamResult[]> {
    return this.http.get(`${this.api}?action=get_H2H&firstTeam=${firstTeam}&secondTeam=${secondTeam}&APIkey=${this.key}`)
      .map(res => res.json()['firstTeam_VS_secondTeam']);
  }
}
