import { Routes } from '@angular/router';
import { DonutsComponent } from './components/donuts/donuts.component';
import { DetailsComponent } from './components/details/details.component';
import { CartComponent } from './components/cart/cart.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    {path: '', component:DonutsComponent},
    {path: 'cart', component:CartComponent},
    {path: ":id", component:DetailsComponent},
    {path:"**", component:NotfoundComponent}
];
