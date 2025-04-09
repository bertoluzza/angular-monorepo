import { CurrencyPipe, DatePipe, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, TemplateRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-card',
  imports: [CurrencyPipe, DatePipe, NgTemplateOutlet, RouterLink],
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderCardComponent {
id = input('');
nome = input('');
date = input<Date>();
price = input<number>()
template = input<TemplateRef<any>>()

formatDate(d: Date) {
  return d.toLocaleDateString('it-IT', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}
}
