import { Component } from '@angular/core';
import { DonutService } from '../../services/donut.service';
import { Result } from '../../models/donut';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private _donutService:DonutService) {};
  totalPrice:number = 0;
  totalCalories:number = 0;


  getCart(){
    this.totalCalories = this._donutService.totalCalories;
    this.totalPrice = this._donutService.totalPrice;
    return this._donutService.cart;
  }

  removeFromCart(d:Result){
    this._donutService.removeFromCart(d);
  }

  resetCart(){
    this._donutService.resetCart();
  }

}
