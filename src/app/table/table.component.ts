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
  // Этот код - неудачная попытка сделать задание на собеседование.
  // Лучше смотреть компонент tabletwo. Я писал этот код, а потом забил.
  // В боевом программировании такие элементы следует удалять.
  // Но здесь это представляет исключительно интерес для демонстрации на собеседованиях
  constructor(private tableService: TableService) {
  }
  openedTableRow = 1;
  openedTableColumn = 1;
  tables: ContentInterface[] = [];
  newObj: TablesInterface[] = [];
  maxRow: number;
  maxColumn: number;
  sheetsRawSize: number;
  sheetColumnSize: number;


  getTables(): void {
    this.tableService.getTable()
      .subscribe((data: { table: ContentInterface[] }) => {
        this.tables = data.table;
        const rowNumbers = [];
        const columnNumbers = [];
        for (let i = 0; i < data.table.length; i++){
          // @ts-ignore
          this.newObj.push(data.table[i].tableNum);
          rowNumbers.push(data.table[i].row);
          columnNumbers.push(data.table[i].column);
        }
        // Calculation of the table size
        this.maxRow = this.getMaxOfArray(rowNumbers);
        this.maxColumn = this.getMaxOfArray(columnNumbers);
        this.sheetsRawSize = Math.trunc(this.maxRow / 50);
        this.sheetColumnSize = Math.trunc(this.maxRow / 50);
        console.log(this.maxRow);
      });
  }
  getMaxOfArray(numArray): number {
    return Math.max.apply(null, numArray);
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
  ngOnInit(): void {
    this.getTables();
    console.log(this.maxRow);
  }}
