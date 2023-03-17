import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacterInfo } from 'src/app/shared/interfaces/character-info.interface';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {

  public currentCharacter!: ICharacterInfo;

  constructor(
    private searchService: SearchService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(response => {
      this.currentCharacter = response["searchItem"];
    })
  }

  loadCharacter(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.searchService.getOne(id).subscribe(data => {
      this.currentCharacter = data;
    })
  }

}
