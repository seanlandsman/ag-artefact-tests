import { Component } from '@angular/core';
import { AgGridModule } from '@ag-grid-community/angular';

import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ModuleRegistry } from '@ag-grid-community/core';
ModuleRegistry.registerModules([ClientSideRowModelModule]);

@Component({
  standalone: true,
  imports: [AgGridModule],
  selector: 'ag-grid-jest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
}