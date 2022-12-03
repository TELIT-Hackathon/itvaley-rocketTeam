import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {Component, NgZone, ViewChild, ViewEncapsulation} from '@angular/core';
import {take} from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  constructor(private _ngZone: NgZone) {}
  @ViewChild('autosize') autosize: CdkTextareaAutosize | undefined;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize!.resizeToFitContent(true));
  }
}
