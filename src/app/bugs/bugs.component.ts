import { Component, OnInit } from '@angular/core';
import { BuglistService } from '../services/buglist.service';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.scss']
})
export class BugsComponent implements OnInit {

  buglistdata: any;

  constructor(private buglist: BuglistService) { }

  ngOnInit(): void {
    this.buglist.getBugList().subscribe((result) => {
      this.buglistdata = result;
    });
  }

}
