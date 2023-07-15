import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-delete-restaurant',
  templateUrl: './delete-restaurant.component.html',
  styleUrls: ['./delete-restaurant.component.css']
})
export class DeleteRestaurantComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteRestaurantComponent>,private rs:RestaurantService, @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }
  confirmDelete(){
    this.rs.delete(this.data.id).subscribe((data)=>{
      this.dialogRef.close(this.data.id)
    })
  }

}
