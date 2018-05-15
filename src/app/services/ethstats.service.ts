import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const EthStatsAPI = require('../../ethstats.json');

@Injectable()
export class EthstatsService {

  constructor(private httpService: HttpClient) {
    console.log(EthStatsAPI);
  }

}
