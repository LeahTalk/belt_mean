import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newPet = {};
  skill1 = "";
  skill2 = "";
  skill3 = "";
  nameTaken;
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.newPet = {
      "name" : "",
      "type" : "",
      "description" :"",
      "skills" : []
    }
    this.nameTaken = false;
  }

  checkPet() {
    let tempObservable  = this._httpService.checkPet(this.newPet['name']);
    tempObservable.subscribe(data => {
      if (!data) {
        this.nameTaken = false;
        this.addPet();
      }
      else {
        this.nameTaken = true;
      }
    });
  }

  addPet() {
    this.newPet["skills"].push({"title" : this.skill1});
    this.newPet["skills"].push({"title" : this.skill2});
    this.newPet["skills"].push({"title" : this.skill3});
    let tempObservable  = this._httpService.addPet(this.newPet);
    tempObservable.subscribe(data => {
      this.newPet = {
        "name" : "",
        "type" : "",
        "description" :"",
        "skills" : ""
      }
      this.router.navigate(['/pets']);
    });
  }

}
