import { Component, OnInit } from '@angular/core';
import { ICharacterInfo } from '../shared/interfaces/character-info.interface';
import { SearchService } from '../shared/services/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{

  public search = '';
  public characters!: Array<ICharacterInfo>;
  public count = 1;

  constructor (
    private searchService: SearchService,
  ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.searchService.getAll(this.count).subscribe(data => {
      if (localStorage.length != 0) {
        for (let i = 0; i < localStorage.length; i++) {
          if (localStorage.key(i) == 'results') {
            this.characters = JSON.parse(localStorage.getItem('results') as string);
          }
          if (localStorage.key(i) == 'search') {
            this.search = localStorage.getItem('search') as string;
          }
          if (localStorage.key(i) == 'filter') {
            this.characters = JSON.parse(localStorage.getItem('filter') as string);
          }
        }
      } else {
        this.characters = data.results.sort((a, b) => a.name.localeCompare(b.name));
        localStorage.setItem('results', JSON.stringify(this.characters));
      }
    })
  }

  filterCharacters(search: string): void {
    localStorage.setItem('search', search);
    this.characters = JSON.parse(localStorage.getItem('results') as string);
    this.characters = this.characters.filter(character => {
      return character.name.toLowerCase().includes(search.toLowerCase());
    });
    localStorage.setItem('filter', JSON.stringify(this.characters))
  }

  loadMore(): void {
    this.count++;
    this.searchService.getAll(this.count).subscribe(data => {
      let newCharacters = data.results;
      for (let char of newCharacters) {
        this.characters.push(char)
      }
      localStorage.setItem('results', JSON.stringify(this.characters
        .sort((a, b) => a.name.localeCompare(b.name))));
    })
  }

}
