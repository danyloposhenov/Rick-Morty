import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICharacterInfo } from '../interfaces/character-info.interface';
import { ISearchInfo } from '../interfaces/search-info';

@Injectable({
  providedIn: 'root'
})
export class SearchService  {

  private url = environment.BACKEND_URL;
  private api = { characters: `${this.url}/character` };

  constructor ( private http: HttpClient ) { }

  getAll(page: number): Observable<ISearchInfo> {
    return this.http.get<ISearchInfo>(`${this.api.characters}/?page=${page}`)
  }

  getOne(id: number): Observable<ICharacterInfo> {
    return this.http.get<ICharacterInfo>(`${this.api.characters}/${id}`)
  }

}
