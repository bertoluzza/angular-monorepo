import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-order-dashboard',
  imports: [],
  templateUrl: './order-dashboard.component.html',
  styleUrl: './order-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderDashboardComponent {}
