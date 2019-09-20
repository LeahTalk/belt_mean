import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pets;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getPets();
  }

  getPets() {
    this.pets = [];
    let tempObservable  = this._httpService.getPets();
    tempObservable.subscribe(data => {
      var newDat : any = data;
      for(var author of newDat) {
        this.pets.push(author);
      }
    });
  }

}
