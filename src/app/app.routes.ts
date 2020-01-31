import{Routes} from '@angular/router';
import { HomeComponent } from './componenst/home/home.component';
import { SearchComponent } from './componenst/search/search.component';
import { ArtistaComponent } from './componenst/artista/artista.component';

export const ROUTES:Routes=[
    {path:'home',component:HomeComponent},
    {path:'search',component:SearchComponent},
    {path:'artist/:id',component:ArtistaComponent},
    {path:'',pathMatch:'full',redirectTo:'home'},
    {path:'**',pathMatch:'full',redirectTo:'home'}

];