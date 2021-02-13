import { Component, OnInit } from '@angular/core';
import {UserInputData} from './userInputData';
import {CheckSurvivalService} from '../check-survival.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  checked: boolean;
  siblings: number[];
  sexes: string[];
  pclasses: string[];
  pclass;
  sex: string;
  age: number;
  parents: number[];
  children: number[];
  selectedChildren: number;
  selectedSiblings: number;
  selectedParents: number;
  userInputData: UserInputData;

  constructor(public checkSurvivalService: CheckSurvivalService) {
    this.sexes = ['M', 'F'];
    this.pclasses = ['Upper', 'Middle', 'Lower'];
    this.parents = [0, 1, 2];
    this.children = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.siblings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }


  ngOnInit() {
  }

  getSurvival(){
    this.userInputData = {
      pclass: 1,
      age: 22,
      sex: 'M',
      parch: 1,
      sibsp: 1
    };
    this.checkSurvivalService.getSurvival(this.userInputData)
      .subscribe(data => {
         console.log(data);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
