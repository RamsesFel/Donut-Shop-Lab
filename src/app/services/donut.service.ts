import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DonutModel, Result } from '../models/donut';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  constructor(private http:HttpClient) { }

  cart:Result[] = [];
  totalPrice:number = 0;
  totalCalories:number = 0;

  getDonuts():Observable<DonutModel>{
    return this.http.get<DonutModel>("https://grandcircusco.github.io/demo-apis/donuts.json");
  }

  getById(id:number):Observable<Result>{
    return this.http.get<Result>(`https://grandcircusco.github.io/demo-apis/donuts/${id}.json`);
  }

  addToCart(d:Result){
    this.cart.push(d);
    this.totalCalories += d.calories;
    this.totalPrice ++;
  }

  removeFromCart(d:Result):void{
    let index:number = this.cart.findIndex(x=>x.id==d.id);
    this.totalCalories -= d.calories;
    this.totalPrice--;
    this.cart.splice(index,1);
  }

  resetCart(){
    this.cart = [];
    this.totalCalories = 0;
    this.totalPrice = 0;
  }

  
}
