import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DatagridComponent } from './components/datagrid/datagrid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, DatagridComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}
