import {Component, Input, OnInit} from '@angular/core';
import set = Reflect.set;

@Component({
  selector: 'app-tablebody',
  templateUrl: './tablebody.component.html',
  styleUrls: ['./tablebody.component.css']
})
export class TablebodyComponent implements OnInit {
  @Input() table: any;
  @Input() rows: number;
  @Input() columns: number;
  @Input() openedTableRow: number;
  @Input() openedTableColumn: number;
  tableRow: [number];
  tableColumn: [number];
  remainderRow: number;
  remainderColumn: number;
  minRowNumber: number;
  minColumnNumber: number;
  constructor() { }

  openTable(): void{
      this.remainderRow = this.rows % (this.openedTableRow * 50);
      this.remainderColumn =  this.columns % (this.openedTableColumn * 50);
      this.minRowNumber = ((this.openedTableRow) - 1) * 50;
      this.minColumnNumber = ((this.openedTableColumn) - 1) * 50;
  }
  setRanges(): any{
    this.tableRow = this.range(this.minRowNumber, this.remainderRow - 1);
    this.tableColumn = this.range(this.minColumnNumber, this.remainderColumn - 1 );
  }
  // Function that creates range
  range(start, end): any{
    if (start === end) { return [start]; }
    console.log('start: ', start, '; end:', end);
    return [start, ...this.range(start + 1, end)];
  }

  ngOnInit(): void {
    this.openTable();
    this.setRanges();
    console.log(this.tableRow);
  }

}
