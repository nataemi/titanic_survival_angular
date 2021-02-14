import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-survived',
  templateUrl: './survived.component.html',
  styleUrls: ['./survived.component.css']
})
export class SurvivedComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
