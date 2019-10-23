import { Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ],
})
export class AppTableComponent implements OnInit {
  dataSource = [
    { name: 'Maciej', surname: 'Nowak', age: 42 },
    { name: 'Jarek', surname: 'Nowak', age: 35 },
    { name: 'Maciej', surname: 'Kwak', age: 52 }
  ];
  tableColumns: string[] = ['name', 'surname'];
  expandedPerson;

  constructor() { }

  ngOnInit() {
  }


}
