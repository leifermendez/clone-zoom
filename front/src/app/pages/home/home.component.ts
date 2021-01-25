import {Component, OnInit} from '@angular/core';
import {v4 as uuidv4} from 'uuid';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToRoom = () => {
    this.router.navigate(['/', uuidv4()]);
  }

}
