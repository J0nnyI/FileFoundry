import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { DirectoryConfigListComponent } from './components/directory-config-list/directory-config-list.component';
import { DirectoryConfigCardComponent } from './components/directory-config-card/directory-config-card.component';
import { DirectoryConfigPageComponent } from './pages/directory-config-page/directory-config-page.component';
import { ItemPageComponent } from './pages/item-page/item-page.component';


@NgModule({
  declarations: [
    ItemListComponent,
    ItemDetailsComponent,
    DirectoryConfigListComponent,
    DirectoryConfigCardComponent,

    DirectoryConfigPageComponent,
    ItemPageComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule
  ]
})
export class LibraryModule { }
