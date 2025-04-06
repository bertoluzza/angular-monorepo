import { ChangeDetectionStrategy, Component, inject, linkedSignal } from '@angular/core';
import { Product } from '../../../core/models/product-list-dto.model';
import { ProductCategory } from '../../../core/enums/product-category.enum';
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
  MatTable
} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../../../core/services/products.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

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
    MatButtonModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  private productService = inject(ProductService);

  private products = toSignal(this.productService.getAll());

  productsDataSource = linkedSignal<Product[]>(() => this.products() ?? []);

  displayedColumns: string[] = [
    'id',
    'name',
    'category',
    'price',
    'inStock',
    'actions'
  ];

  addProduct(): void {
    const newProduct: Omit<Product, 'id'> = {
      name: 'New Product',
      category: ProductCategory.Furniture,
      price: 0,
      inStock: true
    };
    this.productService.create(newProduct).pipe(
      switchMap(() => this.productService.getAll())
    ).subscribe((products) => this.productsDataSource.set(products ?? []));
  }

  editProduct(product: Product) {
    console.log('editProduct', product);
    const updated = { ...product, name: product.name + ' (Edited)' };
    this.productService.update(product.id, updated).pipe(
      switchMap(() => this.productService.getAll())
    ).subscribe((products) => this.productsDataSource.set(products ?? []));
  }

  deleteProduct(product: Product) {
    this.productService.delete(product.id).pipe(
      switchMap(() => this.productService.getAll())
    ).subscribe((products) => this.productsDataSource.set(products ?? []));
  }
}
