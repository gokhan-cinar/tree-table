import { Component, OnInit } from '@angular/core';
import { DataJsonService } from '../../_shared/services/data-json.service';
import { TreeTable } from '../../_shared/models/data';

export interface TreeNodeInterface {
  ID: number;
  Name: string;
  Phone;
  City;
  expand: boolean;
  parentID;
  children?: TreeNodeInterface[];
}

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.scss']
})
export class TreeTableComponent implements OnInit {

  treeTable: TreeTable[];
  mapOfExpandedData: { [ID: string]: TreeNodeInterface[] } = {};

  collapse(array: TreeNodeInterface[], data: TreeNodeInterface, $event: boolean): void {
    if ($event === false) {
      if (data.children) {
        data.children.forEach(d => {
          // tslint:disable-next-line:no-non-null-assertion
          const target = array.find(a => a.ID === d.ID)!;
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root: object): TreeNodeInterface[] {
    const stack: any[] = [];
    const array: any[] = [];
    const hashMap = {};
    stack.push({ ...root, level: 0, expand: false });

    while (stack.length !== 0) {
      const node = stack.pop();
      this.visitNode(node, hashMap, array);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({ ...node.children[i], level: node.level + 1, expand: false, parent: node });
        }
      }
    }

    return array;
  }

  visitNode(node: TreeNodeInterface, hashMap: { [ID: string]: any }, array: TreeNodeInterface[]): void {
    if (!hashMap[node.ID]) {
      hashMap[node.ID] = true;
      array.push(node);
    }
  }

  constructor(private dataServive: DataJsonService) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.dataServive.get().subscribe(resp => {
      // Find the root items.
      const parentData = resp
          .filter(item => !item.hasOwnProperty('parentID'))
          .map(item => {
            item.children = [];
            return item;
          });

      const childData = resp.filter(item => item.hasOwnProperty('parentID'));
      const subChildData = [];

      // Find the first level children of the graph
      childData.forEach((child, index) => {
        const parent = parentData.find(parentItem => parentItem.ID === child.parentID);

        if (!parent) {
          subChildData.push(child);
          return;
        }

        parent.children.push(child);
      });

      // console.log('subChildData:', subChildData);

      subChildData.forEach((item, index) => {
        /*
          TODO traverse the tree and find the parent of the target child
           and attach it to the children array of the parent.
        */
      });

      this.treeTable = parentData;

      this.treeTable.forEach(item => {
        // @ts-ignore
        this.mapOfExpandedData[item.ID] = this.convertTreeToList(item);
      });
    });
  }

  deleteRow(ID: number): void {
    this.treeTable = this.treeTable.filter(d => d.ID !== ID);
  }
}
