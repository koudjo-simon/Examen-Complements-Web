import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-command-success',
  templateUrl: './command-success.component.html',
  styleUrls: ['./command-success.component.scss']
})
export class CommandSuccessComponent implements OnInit{

  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {
    this.sharedService.setFoodCount(0);
  }

}
