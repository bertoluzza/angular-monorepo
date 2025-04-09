import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { OrderCardComponent } from "../order-card/order-card.component";

enum OrderStatus {
  PENDING = 'Pending',
  SHIPPED = 'Shipped',
  DELIVERED = 'Delivered',
}

interface Order {
  id: string;
  name: string;
  status: OrderStatus; //"Pending" | "Shipped" | "Delivered"
  date:  Date;
  price: number;
}

@Component({
  selector: 'app-order-dashboard',
  imports: [OrderCardComponent],
  templateUrl: './order-dashboard.component.html',
  styleUrl: './order-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderDashboardComponent {

date = signal(new Date());

  list = signal<Order[]>([
    {
      id: "1", name: 'Order 1', status: OrderStatus.PENDING, date: new Date('2023-10-01'), price: 10 },
    {
      id: "2", name: 'Order 2', status: OrderStatus.SHIPPED, date: new Date('2023-10-02'), price:22.6 },
    { id:"3", name: 'Order 3', status: OrderStatus.DELIVERED, date: new Date('2023-10-03'), price: 6.99 },
]);


}
