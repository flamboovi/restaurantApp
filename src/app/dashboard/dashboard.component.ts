import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import {MatDialog} from '@angular/material/dialog';
import {DeleteRestaurantComponent} from '../delete-restaurant/delete-restaurant.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allRestaurant:Restaurant []=[];
  displayedColumns: string[] = ['id', 'name', 'owner', 'mobile','email','location','action'];
  constructor(private restaurant:RestaurantService,public dialog:MatDialog) { }
  
  ngOnInit(): void {
    this.getAllRestaurants()
  }
  getAllRestaurants(){
    this.restaurant.getAll().subscribe((data)=>{
      this.allRestaurant=data;
    })
  }
  openDeleteModel(id:number){
    const deleteConfm=this.dialog.open(DeleteRestaurantComponent,{
      width:'350px',
      data:{id}
    });
    deleteConfm.afterClosed().subscribe((result)=>{
      if(result){
        this.allRestaurant=this.allRestaurant.filter((_)=>_.id!==id)
      }
    })
  }
}
