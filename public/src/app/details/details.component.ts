import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  selectedPet : any;
  isLiked : boolean;
  constructor(private _httpService: HttpService, private router: Router,  
    private myRoute : ActivatedRoute) { }

  ngOnInit() {
    this.myRoute.params.subscribe((params: Params) => {
      this.getPet(params['id']);
      this.isLiked = false;
    });
  }

  getPet(id) {
    let tempObservable = this._httpService.getPet(id);
    tempObservable.subscribe(data => {
       this.selectedPet = data;
    });
  }

  upVote(){
    this.selectedPet['likes'] += 1;
    let tempObservable  = this._httpService.updatePet(this.selectedPet._id, this.selectedPet);
    tempObservable.subscribe(data => {
      console.log(data);
      this.getPet(this.selectedPet._id);
      this.isLiked = true;
    });
  }

  deletePet() {
    let tempObservable  = this._httpService.deletePet(this.selectedPet._id);
    tempObservable.subscribe(data => {
      console.log(data);
      this.router.navigate(['/pets']);
    });
  }

}
