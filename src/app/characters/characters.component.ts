import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit{

    characters_info: any = null;

    constructor(private characters: CharactersService){}

    ngOnInit() {

      this.characters.getCharacters().subscribe((respuesta: any) => this.characters_info = respuesta.results);
    }

    seeDetails(idCharacter: string){

      this.characters.getCharacterID(idCharacter);
    }
}
