import { Component } from '@angular/core';

import { ListVetsPage } from '../vetPages/list-vets/list-vets';
import { HomePage } from '../forumPages/home/home';
import { ProductsPage } from '../shopPages/products/products';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  
  tab1Root = ListVetsPage;
  tab2Root = HomePage;
  tab3Root = ProductsPage;

  constructor() {

  }
}
