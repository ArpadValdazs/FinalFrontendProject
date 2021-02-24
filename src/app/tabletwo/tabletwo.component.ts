import {Component, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-tabletwo',
  templateUrl: './tabletwo.component.html',
  styleUrls: ['./tabletwo.component.css']
})
export class TabletwoComponent implements OnInit {
  table = [];
  tableCreated = false;
  tableNotEdited = true;
  tableWidthArray = [];
  tableHeightsArray = [];
  tableForm = new FormGroup({
    height: new FormControl(''),
    width: new FormControl(''),
  });
  elementsEdit = new FormGroup({
    createColumns: new FormControl(''),
    createRows: new FormControl(''),
    deleteColumns: new FormControl(''),
    deleteRows: new FormControl(''),
  });
  constructor() { }
  createTable(): boolean{
    const height = Number(this.tableForm.get('height').value) - 1;
    const width = Number(this.tableForm.get('width').value) - 1;
    if (height <= 0 || width <= 0){
      alert('ничониввёл');
      return false;
    }
    const preTable = [];
    this.tableWidthArray = this.range(0, width);
    this.tableHeightsArray = this.range(0, height);
    for (let i = 0; i < width + 1; i++){
      preTable.push([]);
      for (let j = 0; j < height + 1; j++){
        preTable[i].push(['']);
      }
    }
    this.tableCreated = true;
    this.table = preTable;
    console.log('created: ', this.table);
    return true;
  }
  editElements(): void{
    // Create new copy of array
    const initialTable = this.table.slice();
    const columnsToInsert = Number(this.elementsEdit.get('createColumns').value);
    const rowsToInsert = Number(this.elementsEdit.get('createRows').value);
    const columnsToDelete = Number(this.elementsEdit.get('deleteColumns').value);
    const rowsToDelete = Number(this.elementsEdit.get('deleteRows').value);
    if ((isNaN(rowsToInsert)) || (isNaN(columnsToInsert)) || (isNaN(columnsToDelete)) || (isNaN(rowsToDelete))){
      alert('ты мне хрень ввёл!!!!!!');
    }
    if ((columnsToInsert === 0) && (rowsToInsert === 0) && (columnsToDelete === 0) && (rowsToDelete === 0)){
      alert('!!!');
    } else {
      if (columnsToInsert){
        for (let i = 0; i < initialTable.length; i++){
          for (let j = 0; j < columnsToInsert; j++){
            this.table[i].push(['']);
          }
        }
        this.tableHeightsArray = this.range(0, this.tableHeightsArray.length - 1 + columnsToInsert);
      }
      if (rowsToInsert) {
        for (let i = 0; i < this.tableHeightsArray.length; i++){
          this.table.push([]);
        }
        this.tableWidthArray = this.range(0, this.tableWidthArray.length - 1 + rowsToInsert);
      }
      if (columnsToDelete) {
        for (let i = 0; i < this.tableHeightsArray.length; i++){
          for (let j = 0; j < columnsToDelete; j++){
            this.table[i].pop();
          }
        }
        this.tableWidthArray = this.range(0, this.tableWidthArray.length - 1 - columnsToDelete);
      }
      if (rowsToDelete) {
        for (let i = 0; i < this.tableHeightsArray.length; i++){
          this.table.pop();
        }
        this.tableWidthArray = this.range(0, this.tableWidthArray.length - 1 - rowsToDelete);
      }
    }
  }
  getElementsChanges(height: number, width: number): boolean {
    // Я решил здесь сделать обычный JS, поскольку не понял, как это сделать при помощи директив
    const elem = height + '_' + width;
    const data = document.getElementById(elem);
    const text = data.innerText;
    if (text === '') {
      return false;
    }
    this.table[width][height] = [text];
    console.log('changed: ', this.table);
    this.tableNotEdited = false;
    return true;
  }
  sortRows(rowNumber): void{
   // Здесь я за экономией времени применяю медленную пузырьковую сортировку, но в моём проекте есть и сортировка вставкой.
    // плюс сейчас понял, что не стоило мне всё засовывать всё в массивы
     for (let i = 1; i < this.tableWidthArray.length; i++){
       for (let j = 1; j < this.tableWidthArray.length; j++){
       if (this.table[i][rowNumber][0] < this.table[j - 1][rowNumber][0]){
         const reservation = this.table[i][rowNumber];
         this.table[i][rowNumber] = this.table[j - 1][rowNumber];
         this.table[j - 1][rowNumber] = reservation;
       }
       }
       console.log(this.table[i]);
    }
  }
  range(start, end): any{
    if (start === end) { return [start]; }
    return [start, ...this.range(start + 1, end)];
  }

  ngOnInit(): void {
  }

}
