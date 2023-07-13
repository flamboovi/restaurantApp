import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-resaturant',
  templateUrl: './add-resaturant.component.html',
  styleUrls: ['./add-resaturant.component.css']
})
export class AddResaturantComponent implements OnInit {
  restaurantRecords:Restaurant={
    id:0,
    name:'',
    owner:'',
    mobile:'',
    email:'',
    location:'',
  }
  constructor(private rs:RestaurantService,private router: Router) { }

  ngOnInit(): void {
  }

  addRecords(){
    this.rs.create(this.restaurantRecords).subscribe((data)=>{
      this.router.navigate(['/'])
    })
  }
}
