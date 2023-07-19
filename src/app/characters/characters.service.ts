import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  count: number = 0;
  randomCharacters: number[] = new Array(8);
  
  constructor(private http: HttpClient, private info_characters: CharactersService) { 

    this.info_characters.getCharacters().subscribe((respuesta: any) => this.count = respuesta.info.count);
  }

  // getRandomCharacters() {

  //   for (let i = 0; i < this.randomCharacters.length; i++) {

  //     this.randomCharacters[i] = (Math.floor(Math.random()*this.count)+1);
  //   }
  // }

  getCharacters() {

    return this.http.get("https://rickandmortyapi.com/api/character");
  }

  getCharacterID(newID: string){

    return this.http.get("https://rickandmortyapi.com/api/character/"+newID);
  }
}
