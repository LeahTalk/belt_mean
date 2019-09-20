import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getPets() {
    return this._http.get('/get_pets');
  }

  getPet(id) {
    return this._http.get(`/get_pet/${id}`)
  }

  addPet(newPet) {
    return this._http.post('/add_pet', newPet);
  }

  updatePet(id, newPet) {
    return this._http.put(`/update_pet/${id}`, newPet);
  }

  deletePet(id) {
    return this._http.delete(`delete_pet/${id}`)
  }

  checkPet(name) {
    return this._http.get(`check_pet_name/${name}`)
  }
}
