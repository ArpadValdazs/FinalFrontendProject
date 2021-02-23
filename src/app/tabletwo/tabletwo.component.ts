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
  tableHeightsArray = [];
  tableWidthsArray = [];
  tableForm = new FormGroup({
    height: new FormControl(''),
    width: new FormControl(''),
  });
  elementsEdit = new FormGroup({
    createRows: new FormControl(''),
    createColumns: new FormControl(''),
    deleteRows: new FormControl(''),
    deleteColumns: new FormControl(''),
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
    this.tableHeightsArray = this.range(0, height);
    this.tableWidthsArray = this.range(0, width);
    for (let i = 0; i < height + 1; i++){
      preTable.push([]);
      for (let j = 0; j < width + 1; j++){
        preTable[i].push(['']);
      }
    }
    this.tableCreated = true;
    this.table = preTable;
    console.log(this.table);
    return true;
  }
  editElements(): void{
    // Create new copy of array
    const initialTable = this.table.slice();
    const rowsToInsert = Number(this.elementsEdit.get('createRows').value);
    const columnsToInsert = Number(this.elementsEdit.get('createColumns').value);
    const rowsToDelete = Number(this.elementsEdit.get('deleteRows').value);
    const columnsToDelete = Number(this.elementsEdit.get('deleteColumns').value);
    if ((isNaN(rowsToInsert)) || (isNaN(rowsToInsert)) || (isNaN(rowsToInsert)) || (isNaN(rowsToInsert))){
      alert('ты мне хрень ввёл!!!!!!');
    }
    if ((rowsToInsert === 0) && (columnsToInsert === 0) && (rowsToDelete === 0) && (columnsToDelete === 0)){
      alert('!!!');
    } else {
      if (columnsToInsert){
        for (let i = 0; i < initialTable.length; i++){
          for (let j = 0; j < columnsToInsert; j++){
            this.table[i].push(['']);
          }
        }
        this.tableWidthsArray = this.range(0, this.tableWidthsArray.length - 1 + columnsToInsert);
      }
      if (rowsToInsert) {
        for (let i = 0; i < this.tableWidthsArray.length; i++){
          this.table.push([]);
        }
        this.tableHeightsArray = this.range(0, this.tableHeightsArray.length - 1 + rowsToInsert);
      }
      if (columnsToDelete) {
        for (let i = 0; i < this.tableWidthsArray.length; i++){
          for (let j = 0; j < columnsToDelete; j++){
            this.table[i].pop();
          }
        }
        this.tableHeightsArray = this.range(0, this.tableHeightsArray.length - 1 - columnsToDelete);
      }
      if (rowsToDelete) {
        for (let i = 0; i < this.tableWidthsArray.length; i++){
          this.table.pop();
        }
        this.tableHeightsArray = this.range(0, this.tableHeightsArray.length - 1 - rowsToDelete);
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
    this.table[height][width] = [text];
    this.tableNotEdited = false;
    return true;
  }
  checkTableSize(): void{
   console.log('lel');
  }
  range(start, end): any{
    if (start === end) { return [start]; }
    return [start, ...this.range(start + 1, end)];
  }

  ngOnInit(): void {
  }

}
