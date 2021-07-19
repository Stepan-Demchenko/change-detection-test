import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-onpush-detection',
  templateUrl: './onpush-detection.component.html',
  styleUrls: ['./onpush-detection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushDetectionComponent {
  @Input() someData: any;
  constructor() { }

}
