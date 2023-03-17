import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { SearchResolver } from '../shared/services/search.resolver';

const routes: Routes = [
  {
    path: '', component: SearchComponent
  },
  {
    path: ':id',
    component: SearchItemComponent,
    resolve: { searchItem: SearchResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
