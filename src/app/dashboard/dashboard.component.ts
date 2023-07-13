import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allRestaurant:Restaurant []=[];
  displayedColumns: string[] = ['id', 'name', 'owner', 'mobile','email','location'];
  constructor(private restaurant:RestaurantService) { }
  
  ngOnInit(): void {
    this.getAllRestaurants()
  }
  getAllRestaurants(){
    this.restaurant.getAll().subscribe((data)=>{
      this.allRestaurant=data;
      console.log(this.allRestaurant)
    })
  }
}
