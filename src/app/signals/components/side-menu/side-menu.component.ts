import { Component, signal,  } from '@angular/core';

interface MenuItem {
  title: string,
  route: string,
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems = signal<MenuItem[]>([
      { route: 'counter',    title: 'Contador'   },
      { route: 'user-info',  title: 'Usuario'    },
      { route: 'properties', title: 'Mutaciones' },
    ]);

  // public menuItems: MenuItem[] = [
  //   { route: 'counter',    title: 'Contador'   },
  //   { route: 'user-info',  title: 'Usuario'    },
  //   { route: 'properties', title: 'Mutaciones' },
  // ]


}
