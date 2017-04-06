import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novahome',
  templateUrl: './novahome.component.html',
  styleUrls: ['./novahome.component.css']
})
export class NovahomeComponent implements OnInit {

  constructor() { }

  private cor: string = "red";

  ola() {
    this.cor = this.cor == "red" ? 'blue' : 'red';
    alert("Hello World");
  }
  ngOnInit() {
  }

}
