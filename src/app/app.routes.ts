import { Routes } from '@angular/router';

import { SearchPageComponent } from './search-page/search-page.component';
import { FeaturePageComponent } from './feature-page/feature-page.component';

export const routes: Routes = [
    { path: '', component: FeaturePageComponent},
    { path: 'search', component: SearchPageComponent},
]