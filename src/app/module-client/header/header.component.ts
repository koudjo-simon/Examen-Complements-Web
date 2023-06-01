import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(public sharedService: SharedService) {

  }

  ngOnInit() {

  }
}
