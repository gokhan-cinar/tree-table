import { Component, OnInit } from '@angular/core';
import { DataJsonService } from '../../_shared/services/data-json.service';
import { TreeTable } from '../../_shared/models/data';

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.scss']
})
export class TreeTableComponent implements OnInit {

  treeTable: TreeTable[];
  mapOfExpandData = {};

  constructor(private dataServive: DataJsonService) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.dataServive.get().subscribe(resp => {
      this.treeTable = resp;
    });
  }

  deleteRow(ID: number): void {
    this.treeTable = this.treeTable.filter(d => d.ID !== ID);
  }
}
