import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DirectoryConfigPageComponent} from './pages/directory-config-page/directory-config-page.component';
import {ItemPageComponent} from './pages/item-page/item-page.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'items'
  },
  {
    path:'items',
    component:ItemPageComponent
  },
  {
    path:'directory',
    component:DirectoryConfigPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
