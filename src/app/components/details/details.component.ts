import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonutService } from '../../services/donut.service';
import { DonutModel, Result } from '../../models/donut';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  constructor(private activatedRoute:ActivatedRoute, private _donutService:DonutService){};

  displayDonut:Result = {} as Result;

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe((paramMap)=>{
      let id = Number(paramMap.get("id"));
      this._donutService.getById(id).subscribe((responce:Result)=>{
        this.displayDonut =responce;
      })
    })
  }

  addToCart(){
    this._donutService.addToCart(this.displayDonut);
  }

}
