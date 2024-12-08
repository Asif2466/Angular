import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-items',
  imports: [],
  templateUrl: './dashboard-items.component.html',
  styleUrl: './dashboard-items.component.css'
})
export class DashboardItemsComponent {

  // @Input({required: true}) image !: {
  //   src: string,
  //   alt: string
  // }
  // @Input({required: true}) title!: string;

  image = input.required<{src: string, alt: string}>();
  title = input.required<string>();

}
