import { Product } from './../../../core/models/product-list-dto.model';
import { ChangeDetectionStrategy, Component, effect, input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [MatInputModule, MatFormFieldModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent {
  product = input<Product>();

  form = new FormGroup({
    label: new FormControl<string>('', [Validators.required, Validators.max(5)
    ])
  })

  constructor() {
    effect(() => {
      const p = this.product();
      console.log("product = ", p);
      this.form.controls.label.setValue(p?.name ?? null)
    })

    this.form.controls.label.valueChanges.subscribe(
    (value) => {
      console.log("value", value)
    }
    )
  }
}
