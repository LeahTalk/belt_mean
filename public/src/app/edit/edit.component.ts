import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  selectedPet: any;
  newPet;
  skill1;
  skill2;
  skill3;
  nameTaken;
  constructor(private _httpService: HttpService, private router: Router,  
    private myRoute : ActivatedRoute) {
      this.myRoute.params.subscribe((params: Params) => {
        this.getPet(params['id']);
      });
      this.newPet = {
        "name" : "",
        "type" : "",
        "description" :"",
        "skills" : []
      }
     }

  ngOnInit() {
  }

  getPet(id) {
    let tempObservable = this._httpService.getPet(id);
    tempObservable.subscribe(data => {
       this.selectedPet = data;
       this.newPet = this.selectedPet;
       this.skill1 = this.selectedPet.skills[0].title;
       this.skill2 = this.selectedPet.skills[1].title;
       this.skill3 = this.selectedPet.skills[2].title;

    });
  }

  checkPet() {
    let tempObservable  = this._httpService.checkPet(this.newPet['name']);
    tempObservable.subscribe(data => {
      if (!data) {
        this.nameTaken = false;
        this.editPet();
      }
      else {
        this.nameTaken = true;
      }
    });
  }

  editPet() {
    this.newPet['skills'] = [];
    this.newPet["skills"].push({"title" : this.skill1});
    this.newPet["skills"].push({"title" : this.skill2});
    this.newPet["skills"].push({"title" : this.skill3});
    let tempObservable  = this._httpService.updatePet(this.selectedPet._id, this.newPet);
    tempObservable.subscribe(data => {
      this.newPet = {
        "name" : "",
        "type" : "",
        "description" :"",
        "skills" : []
      }
      this.router.navigate(['/pets/' + this.selectedPet._id]);
    });
  }

}
