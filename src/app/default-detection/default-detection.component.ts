import { Component, Input } from '@angular/core';
import { SomeData } from '../some-data';

@Component({
  selector: 'app-default-detection',
  templateUrl: './default-detection.component.html',
  styleUrls: ['./default-detection.component.scss']
})
export class DefaultDetectionComponent {
  @Input() someData!: SomeData;
}
