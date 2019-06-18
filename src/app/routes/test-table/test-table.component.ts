import { Component, OnInit } from '@angular/core';

export interface TreeNodeInterface {
  key: number;
  name: string;
  age: number;
  level: number;
  expand: boolean;
  address: string;
  children?: TreeNodeInterface[];
}

@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.scss']
})
export class TestTableComponent implements OnInit {

  // listOfMapData = [
  //   {
  //     ID: 1,
  //     Phone: '(403) 125-2552',
  //     City: 'Coevorden',
  //     Name: 'Grady'
  //   },
  //   {
  //     ID: 2,
  //     Phone: '(403) 125-2552',
  //     City: 'Coevorden',
  //     Name: 'Grady'
  //   },
  //   {
  //     ID: 3,
  //     Phone: '(403) 125-2552',
  //     City: 'Coevorden',
  //     Name: 'Grady'
  //   },
  //   {
  //     ID: 4,
  //     parentID: 1,
  //     Phone: '(4031) 125-2552',
  //     City: 'Coevorden',
  //     Name: 'Grady'
  //   },
  //   {
  //     ID: 5,
  //     parentID: 2,
  //     Phone: '(4031) 125-2552',
  //     City: 'Coevorden',
  //     Name: 'Grady'
  //   }
  // ];

  listOfMapData = [
    {
      key     : 1,
      name    : 'John Brown sr.',
      age     : 60,
      address : 'New York No. 1 Lake Park',
      children: [
        {
          key    : 11,
          name   : 'John Brown',
          age    : 42,
          address: 'New York No. 2 Lake Park'
        }
      ]
    },
    {
      key    : 2,
      name   : 'Joe Black',
      age    : 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  mapOfExpandedData = {};

  collapse(array: TreeNodeInterface[], data: TreeNodeInterface, $event: boolean): void {
    if ($event === false) {
      if (data.children) {
        data.children.forEach(d => {
          const target = array.find(a => a.key === d.key);
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root: object): TreeNodeInterface[] {
    const stack = [];
    const array = [];
    const hashMap = {};
    stack.push({ ...root, level: 0, expand: false });

    while (stack.length !== 0) {
      const node = stack.pop();
      this.visitNode(node, hashMap, array);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({ ...node.children[ i ], level: node.level + 1, expand: false, parent: node });
        }
      }
    }
    return array;
  }

  visitNode(node: TreeNodeInterface, hashMap: object, array: TreeNodeInterface[]): void {
    if (!hashMap[ node.key ]) {
      hashMap[ node.key ] = true;
      array.push(node);
    }
  }

  ngOnInit(): void {
    this.listOfMapData.forEach(item => {
      this.mapOfExpandedData[ item.key ] = this.convertTreeToList(item);
    });
  }
}
