import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  urlPerson = "https://db-anagrafiche-default-rtdb.europe-west1.firebasedatabase.app/persone"

  constructor(private http: HttpClient) { }

  insertPersona(url : string, data : {} ){
    return this.http.post(url, data)
  }
}
