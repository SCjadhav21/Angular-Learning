import { Component, OnInit } from '@angular/core';
import { GridService } from './grid.servise';

@Component({
  selector: 'app-grid',
  template: `
    <h2>Grid Component</h2>
    <div class="grid-container" style="">
      <div class="grid-divs" *ngFor="let grid of gridData">
        <h1>{{ grid.id }}</h1>
        <h3>Title :{{ grid.title }}</h3>
        <p>Description : {{ grid.body }}</p>
      </div>
    </div>
  `,
  styles: [
    `
      .grid-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        font-size: 16px;
        justify-content: space-evenly;
        justify-items: center;
        padding: 10px;

        gap: 20px;
      }
      .grid-divs {
        color: blue;

        font-size: 24px;
        padding: 20px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
    `,
  ],
})
export class GridComponent implements OnInit {
  gridData: Array<any> = [];

  constructor(private gridService: GridService) {}

  ngOnInit() {
    this.gridData = this.gridService.getData();
  }
}
