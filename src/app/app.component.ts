import {Component} from '@angular/core';
import * as XLSX from "xlsx";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor() {}

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  tableData: any = [];

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

      this.tableData = data;
    };
  }

  chooseFile(evt: any) {
    console.log(evt.target.files);
    this.uploadFile(evt.target.files);
  }
}
