import {Component, Input, OnInit} from '@angular/core';

export interface PeriodicElement {
  TIME: string;
  MONDAY: string;
  TUESDAY: string;
  WEDNESDAY: string;
  THURSDAY: string;
  FRIDAY: string;
  SATURDAY: string;
  SUNDAY: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
})
export class TableComponent implements OnInit {

  @Input() elementData: any = [];

  displayedColumns: string[] = ['TIME', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = [];

  constructor() { }

  ngOnInit(): void {
    this.data = this.applyElementData(this.elementData);
  }

  applyElementData(array: any[]): any[] {
    return array.map(item => {
      const resultItem: any = {};

      for (let key in item) {
        resultItem[key] = item[key].replace('\n', ' ')
      }

      return resultItem;
    })
  }

}
