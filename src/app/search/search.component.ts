import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foods } from '../shared/model/food';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchItem : string = '';
  private _foodFilter: string = '';
  public filteredFoods: Foods[] = [];

  constructor(private route: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchItem'])
      this.searchItem = params['searchItem'];
    })
  }

}