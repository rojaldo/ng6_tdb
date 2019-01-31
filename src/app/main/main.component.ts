import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Card } from '../model/card';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  result: any;
  card: Card;

  constructor(public service: RequestService) { }

  ngOnInit() {
    this.getApiInfo();
  }

  getApiInfo() {
    this.service.getRequest('https://opentdb.com/api.php?amount=1').subscribe(
      data => this.processResult(data),
      error => this.processError(error),
      () => this.processFinal()
    );
  }

  processResult(data: any) {
    console.log(data);
    this.result = data;
    this.card = new Card(this.result.results[0]);
  }

  processError(error: any) {
  }

  processFinal() {}

}
