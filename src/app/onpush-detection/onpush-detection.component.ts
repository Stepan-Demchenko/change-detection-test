import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SomeData } from '../some-data';

@Component({
  selector: 'app-onpush-detection',
  templateUrl: './onpush-detection.component.html',
  styleUrls: ['./onpush-detection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushDetectionComponent {
  @Input() someData!: SomeData;
}
