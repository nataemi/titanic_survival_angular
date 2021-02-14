import { Component, OnInit } from '@angular/core';
import {StatsService} from '../stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  sexData: any;
  classData: any;

  constructor(public statsServive: StatsService) {
  }

  ngOnInit(): void {
    this.getStats();
  }

  update(event: Event) {
    this.getStats();
  }

  getStats(){
    this.statsServive.getStats().subscribe(data => {
      console.log(data);
      this.sexData = {
        labels: ['Men', 'Women'],
        datasets: [
          {
            data: [JSON.parse(data.sex_stats).M, JSON.parse(data.sex_stats).F],
            backgroundColor: [
              "#FF6384",
              "#36A2EB"
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB"
            ]
          }]
      };

      this.classData = {
        labels: ['Upper Class','Middle Class','Lower Class'],
        datasets: [
          {
            data: [JSON.parse(data.pclass_stats)['1'], [JSON.parse(data.pclass_stats)['2']], [JSON.parse(data.pclass_stats)['3']]],
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ]
          }]
      };
    });
  }
}
