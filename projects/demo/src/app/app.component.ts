import { Component, OnInit } from '@angular/core';
import reportJson1 from '../assets/report-v8.0.0.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Lighthouse Viewer / Reporter Angular';

  data: any;

  private _reports: any[] = [];

  ngOnInit() {
    this._reports = [reportJson1];
    this.data = this._reports[0];
  }

}
