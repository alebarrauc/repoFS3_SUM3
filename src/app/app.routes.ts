import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/formulario/formulario.component';
import { RockComponent } from './pages/rock/rock.component';
import { PopComponent } from './pages/pop/pop.component';
import { OstComponent } from './pages/ost/ost.component';
import { IndustrialComponent } from './pages/industrial/industrial.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'form', component: RegisterComponent },
  { path: 'rock', component: RockComponent },
  { path: 'pop', component: PopComponent },
  { path: 'ost', component: OstComponent },
  { path: 'industrial', component: IndustrialComponent }
];
