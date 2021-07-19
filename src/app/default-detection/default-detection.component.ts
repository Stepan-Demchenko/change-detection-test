import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-detection',
  templateUrl: './default-detection.component.html',
  styleUrls: ['./default-detection.component.scss']
})
export class DefaultDetectionComponent {
  @Input() someData: any;
  constructor() {}
}
