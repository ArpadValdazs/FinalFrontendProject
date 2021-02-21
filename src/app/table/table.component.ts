import { Component, OnInit } from '@angular/core';
import {TableService} from './table.service';
import {ContentInterface} from './interface/content.interface';
import {TablesInterface} from './interface/tables.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private tableService: TableService) {
  }

  tables: ContentInterface[] = [];
  newObj: TablesInterface[] = [];

  getTables(): void {
    this.tableService.getTable()
      .subscribe((data: { table: ContentInterface[] }) => {
        this.tables = data.table;
        for (let i = 0; i < data.table.length; i++){
          // @ts-ignore
          this.newObj.push(data.table[i].tableNum);
        }
      });
  }

  calcSize(table): object {
    let size = [];
    const rowLengthArray = [];
    const columnLengthArray = [];
    table.map(elem => {
      rowLengthArray.push(elem.row);
      columnLengthArray.push(elem.column);
    });
    size = [rowLengthArray, columnLengthArray];
    return size;
  }

  setTables(): void {
    const numbersArray = [];
    for (let i = 0; i < this.tables.length; i++) {
      numbersArray.push(this.tables[i].tableNum);
    }
    console.log(numbersArray);
  }

  ngOnInit(): void {
    this.getTables();
  }}
