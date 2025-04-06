import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// See https://freedium.cfd/https%3A%2F%2Fjavascript.plainenglish.io%2Fimplementing-an-overlay-spinner-in-angular-with-angular-material-3dee425b60c2
@Component({
  selector: 'app-spinner',
  imports: [MatProgressSpinnerModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {}
