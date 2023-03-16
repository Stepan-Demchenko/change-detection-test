import { Component } from '@angular/core';
import { SomeData } from './some-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'change-detection';
  someData: SomeData = {count: 0}

  testDefaultDetectionClick(): void {
    this.someData.count += 1;
  }

  testOnPushDetectionClick(): void {
    this.someData = {...this.someData, count: this.someData.count + 1};
  }
}
