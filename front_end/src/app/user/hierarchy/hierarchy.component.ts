import { Component, OnInit } from '@angular/core';
import { NgxFlowChatOptions, NgxFlowChatData } from 'ngx-flowchart'

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.scss']
})
export class HierarchyComponent implements OnInit {
  hierachi: any = {
      name: "A1",
      position: "CEO",
      employee: [
        {
          name: "B1",
          position: "Product Owner",
          employee:[
            {
              name: "c1",position: "Stakeholder",
              employee: [
                {
                  name: "D1",position: "Project Manager",
                  employee: [
                    { name: "E1",position: "Developer"},
                    { name: "E2",position: "Developer"}
                  ]
                }, {
                  name: "D2",position: "Project Manager",
                  employee: [
                    { name: "E3",position: "Developer"},
                    { name: "E4",position: "Developer"}
                  ]
                }
              ]
            }, {
              name: "c2",position: "Stakeholder",
              employee: [
                {
                  name: "D3",position: "Project Manager",
                  employee: [
                    { name: "E5",position: "Developer"},
                    { name: "E6",position: "Developer"}
                  ]
                }, {
                  name: "D4",position: "Project Manager",
                  employee: [
                    { name: "E7",position: "Developer"},
                    { name: "E8",position: "Developer"}
                  ]
                }
              ]
            }
          ]
        }
      ]

  }
  flowData: NgxFlowChatData[] = [{
        id: "1",
        name: "Group1",
        
      }]
  //   {
  //     id: "1",
  //     name: "Group1",
  //     groupData: [{
  //       id: "2",
  //       name: "Flow1",
  //     }]
  //   },
  //   {
  //     id: "3",
  //     name: "Flow2",
  //   },
  //   {
  //     id: "4",
  //     name: "Group2",
  //     groupData: [{
  //       id: "5",
  //       name: "Flow3",
  //     },
  //     {
  //       id: "6",
  //       name: "Flow4",
  //     }]
  //   },
  // ];

  flowOptions: NgxFlowChatOptions = {
    groupBackground: 'linear-gradient(to bottom,#b9b9b9 0,#fefefe 50%)',
    groupShadow: '0 0.3rem 0.5rem 0 rgba(44,51,73,.5)',
    groupBorderRadius: '3px',
    groupTextColor: '#000',
    background: '#0e3e7d',
    shadow: '0 2px 4px 0 #333',
    borderRadius: '5px',
    textColor: '#fff',
    width: '200px'
  };
  
  constructor() { }

  ngOnInit(): void {
  }

  clickN(event : any) {
    console.log(event);
  }

}

