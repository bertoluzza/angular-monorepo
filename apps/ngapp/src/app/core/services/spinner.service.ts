import { Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { SpinnerComponent } from '../../ui/spinner/spinner.component';

// See https://freedium.cfd/https%3A%2F%2Fjavascript.plainenglish.io%2Fimplementing-an-overlay-spinner-in-angular-with-angular-material-3dee425b60c2
@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private overlayRef: OverlayRef | null = null;

  constructor(private overlay: Overlay) {}

  show(): void {
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create({
        hasBackdrop: true,
        backdropClass: 'cdk-overlay-transparent-backdrop',
        positionStrategy: this.overlay
          .position()
          .global()
          .centerHorizontally()
          .centerVertically(),
      });
      const spinnerPortal = new ComponentPortal(SpinnerComponent);
      this.overlayRef.attach(spinnerPortal);
    }
  }

  hide(): void {
    if (this.overlayRef) {
      this.overlayRef.detach();
      this.overlayRef = null;
    }
  }
}
