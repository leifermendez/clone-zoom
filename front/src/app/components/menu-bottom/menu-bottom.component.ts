import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-bottom',
  templateUrl: './menu-bottom.component.html',
  styleUrls: ['./menu-bottom.component.scss']
})
export class MenuBottomComponent implements OnInit {
  menu: Array<any> = [
    {name: 'Muted', icon: 'uil uil-microphone'},
    {name: 'Home', icon: 'uil uil-estate'},
    {name: 'Share', icon: 'uil uil-share'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
