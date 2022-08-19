import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'library',
    loadChildren:()=>import('./library/library.module').then(m=>m.LibraryModule)
  },
  {
    path:'',
    redirectTo:'library',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
