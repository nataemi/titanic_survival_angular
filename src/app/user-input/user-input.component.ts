import { Component, OnInit } from '@angular/core';
import {UserInputData} from './userInputData';
import {CheckSurvivalService} from '../check-survival.service';
import {Router} from '@angular/router';
import {SelectItem} from 'primeng/api';


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  checked: boolean;
  sexes: SelectItem[];
  pclasses: SelectItem[];
  pclass: SelectItem = { label: "Upper class", value: 1 };
  sex: SelectItem = { label: "M", value: "M" };
  age: number;
  numbers: SelectItem[];
  selectedChildren: SelectItem = { label: '0', value: 0 };
  selectedSiblings: SelectItem = { label: '0', value: 0 };
  selectedParents: SelectItem = { label: '0', value: 0 };
  userInputData: UserInputData;

  constructor(public checkSurvivalService: CheckSurvivalService, public router: Router) {
  }


  ngOnInit() {
    this.sexes = [];
    this.sexes = [
      { label: "M", value: "M" },
      { label: "F", value: "F" }
    ];
    this.pclasses = [];
    this.pclasses = [
      { label: "Upper class", value: 1 },
      { label: "Middle class", value: 2 },
      { label: "Lower class", value: 3 }
    ];
    this.numbers = [];
    this.numbers = [
      { label: '0', value: 0 },
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4', value: 4 },
      { label: '5', value: 5 },
      { label: '6', value: 6 },
      { label: '7', value: 7 },
      { label: '8', value: 8 },
    ];
  }

  getSurvival(){
    const sibsFromForm: number = (this.checked ? 1 : 0);
    const sibspFromForm: number = sibsFromForm + this.selectedSiblings.value;
    const parchFromForm: number = this.selectedChildren.value + this.selectedParents.value;
    this.userInputData = {
      pclass: this.pclass.value,
      age: this.age,
      sex: this.sex.value,
      parch: parchFromForm,
      sibsp: sibspFromForm
    };
    console.log(this.userInputData);
    console.log(this.pclass);
    this.checkSurvivalService.getSurvival(this.userInputData)
      .subscribe(data => {
         if ( 1 === data){
           this.router.navigateByUrl('/survived');
         }
         else{
           this.router.navigateByUrl('/drowned');
         }
        }, (err) => {
          console.log(err);
        }
      );
  }
}
