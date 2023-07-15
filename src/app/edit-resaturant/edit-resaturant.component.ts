import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-edit-resaturant',
  templateUrl: './edit-resaturant.component.html',
  styleUrls: ['./edit-resaturant.component.css']
})
export class EditResaturantComponent implements OnInit {
  restaurantRecords:Restaurant={
    id:0,
    name:'',
    owner:'',
    mobile:'',
    email:'',
    location:'',}

  constructor(private rs:RestaurantService,private route:ActivatedRoute,private router:Router) { 
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      let id1=Number(params.get('id'));
      this.getById(id1);
    })
  }
  getById(id:number){
    this.rs.getById(id).subscribe((data)=>{
      console.log(data)
      this.restaurantRecords=data;
    })
  }
  updateRecords(){
    this.rs.update(this.restaurantRecords).subscribe(()=>{
      this.router.navigate(['/'])
    })
  }

}
