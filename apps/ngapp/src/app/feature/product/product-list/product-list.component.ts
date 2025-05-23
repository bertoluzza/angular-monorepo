import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Product } from '../../../core/models/product-list-dto.model';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../../../core/services/products.service';
import { finalize, switchMap } from 'rxjs';
import { SpinnerService } from '../../../core/services/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../../../ui/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-product-list',
  imports: [
    MatHeaderCell,
    MatColumnDef,
    MatHeaderRow,
    MatRow,
    CurrencyPipe,
    MatTable,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatIconModule,
    MatCell,
    MatCellDef,
    MatRowDef,
    MatButtonModule,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  private productService = inject(ProductService);
  private spinnerService = inject(SpinnerService);
  private dialog = inject(MatDialog);

  productsDataSource = signal<Product[]>([]);

  displayedColumns: string[] = [
    'id',
    'name',
    'category',
    'price',
    'inStock',
    'actions',
  ];

  ngOnInit() {
    this.spinnerService.show();
    this.productService
      .getAll()
      .pipe(
        switchMap((products) => {
          this.productsDataSource.set(products ?? []);
          return products;
        }),
        finalize(() => this.spinnerService.hide())
      )
      .subscribe();
  }

  onAddProduct() {
    console.log('onAddProduct');
  }

  onEditProduct(product: Product) {
    console.log('onEditProduct', product);
  }

  onDeleteProduct(product: Product) {
    this.spinnerService.show();

    this.dialog
      .open(ConfirmationModalComponent, {
        data: `Vuoi cancellare il prodotto #${product.id}?`,
      })
      .afterClosed()
      .subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.productService
            .delete(product.id)
            .pipe(
              switchMap(() => this.productService.getAll()),
              finalize(() => this.spinnerService.hide())
            )
            .subscribe((products) =>
              this.productsDataSource.set(products ?? [])
            );
        }
      });
  }
}
