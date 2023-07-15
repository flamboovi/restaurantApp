import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http:HttpClient) {

   }

   //get all records
   getAll():Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>("http://localhost:3000/restaurant")
   }
   //add record

   create(payload:Restaurant):Observable<Restaurant>{
    return this.http.post<Restaurant>("http://localhost:3000/restaurant",payload);
   }

   //get records by Id
   getById(id:number):Observable<Restaurant>{
    return this.http.get<Restaurant>(`http://localhost:3000/restaurant/${id}`);
   }

   //update records
   update(payload:Restaurant):Observable<Restaurant>{
    return this.http.put<Restaurant>(`http://localhost:3000/restaurant/${payload.id}`,payload);
   }

   //delete records
   delete(id:number){
    return this.http.delete<Restaurant>(`http://localhost:3000/restaurant/${id}`);
   }
}
