import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  startDate: Date;

  constructor() { }

  ngOnInit(): void {

    console.log(this.startDate)
  }

}
