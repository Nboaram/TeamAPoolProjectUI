import { Component, OnInit } from '@angular/core';
import { MenuService } from '../Nav/services/menu.service';
import { RequestyBoiService } from '../services/requesty-boi.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private menu: MenuService,
    private requestyboi: RequestyBoiService
    ) { }

  ngOnInit(): void {
  }

  clicked(){
    // this.menu.incrementClickCounter();

    this.requestyboi.get()
    .subscribe((data) => {
      console.log('data', data);
  });

}

}

