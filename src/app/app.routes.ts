import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotelComponent } from './hotel/hotel.component';
import { CarComponent } from './car/car.component';
import { BusComponent } from './bus/bus.component';
import { TrainComponent } from './train/train.component';
import { FlightComponent } from './flight/flight.component';

export const routes: Routes = [{ path: '', component: HomeComponent },
    { path: 'hotel', component: HotelComponent },
    { path: 'car', component: CarComponent },
    { path: 'bus', component: BusComponent },
    { path: 'train', component: TrainComponent },
    { path: 'flight', component: FlightComponent }];
