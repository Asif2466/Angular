import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ServerStatusComponent } from "./dashboard/server-status/server-status.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";
import { DashboardItemsComponent } from "./dashboard/dashboard-items/dashboard-items.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ServerStatusComponent, TrafficComponent, TicketsComponent, DashboardItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Components_Templates_DeepDive';

  
  

}
