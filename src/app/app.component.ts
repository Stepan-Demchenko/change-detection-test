import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'change-detection';
  someData = {
    test: 'one'
  }

  testClick(): void {
    this.someData.test = 'two';
  }
}
