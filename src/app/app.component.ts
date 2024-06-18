import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DonutsComponent } from './components/donuts/donuts.component';
import { DonutService } from './services/donut.service';
import { CartComponent } from './components/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DonutsComponent,RouterLink,CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DonutShop';
  constructor(private _donutsService:DonutService){};
}
