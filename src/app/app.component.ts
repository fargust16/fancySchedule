import { Component } from '@angular/core';
import {DatepickerOptions} from "ng2-datepicker";

import { getYear } from 'date-fns';
import locale from 'date-fns/locale/ru';
import * as XLSX from "xlsx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  dateFrom = new Date();
  dateTo = new Date();

  optionsFrom: DatepickerOptions = {
    placeholder: 'дата начала',
    minYear: getYear(new Date()),
    maxYear: getYear(new Date()) + 1,
    maxDate: new Date(),
    format: 'dd.MM.yyyy', // date format to display in input
    locale: locale,
    firstCalendarDay: 1, // 0 - Sunday, 1 - Monday
    formatTitle: 'LLLL yyyy',
    formatDays: 'EEEEEE',
  };


  optionsTo: DatepickerOptions = {
    placeholder: 'дата конца',
    minYear: getYear(new Date()),
    maxYear: getYear(new Date()) + 1,
    maxDate: new Date(),
    format: 'dd.MM.yyyy', // date format to display in input
    locale: locale,
    firstCalendarDay: 1, // 0 - Sunday, 1 - Monday
    formatTitle: 'LLLL yyyy',
    formatDays: 'EEEEEE',
  };

  uploadFile(evt: any){
    const file = evt[0];
    const reader: FileReader = new FileReader();

    reader.readAsBinaryString(file);
    reader.onload = (e: any) => {
      /* create workbook */
      const binarystr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });

      /* selected the first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      const data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
      console.log(data); // Data will be logged in array format containing objects
    };
  }

  chooseFile(evt: any) {
    console.log(evt.target.files);
    this.uploadFile(evt.target.files);
  }
}
