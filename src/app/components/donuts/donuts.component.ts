import { Component } from '@angular/core';
import { DonutService } from '../../services/donut.service';
import { DonutModel } from '../../models/donut';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-donuts',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './donuts.component.html',
  styleUrl: './donuts.component.css'
})
export class DonutsComponent {
  constructor(private _donutsService:DonutService){};

  donutList:DonutModel = {} as DonutModel;

  ngOnInit(){
    this.getDonuts();
  }

  getDonuts(){
    this._donutsService.getDonuts().subscribe((responce:DonutModel)=>{
      this.donutList=responce;
      console.log(this.donutList);
    });
  }

}
