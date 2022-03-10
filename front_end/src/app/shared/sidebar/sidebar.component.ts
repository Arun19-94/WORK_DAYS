import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isTimeOpen: boolean = false
  isUserOpen: boolean = false
  
  constructor( public router: Router) { }

  ngOnInit(): void {
  }
  toggeleTimer()  {
    this.isTimeOpen = !this.isTimeOpen
  }

  toggeleUser()  {
  
    this.isUserOpen = !this.isUserOpen
  }

  reroute(nav:any) {
    this.router.navigate([nav])
  }
}
