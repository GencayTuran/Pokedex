import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { PostService } from './post.service';

const subjectDataList = new ReplaySubject();
const subjectDataDetail = new ReplaySubject();

@Injectable({
  providedIn: 'root',
})
export class DataService {
  pokemonsDataList = subjectDataList;
  pokemonsDataDetail = subjectDataDetail;
  index: number;
  private listUrl =
    'https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon';
  private detailsUrl = `https://pokeapi.co/api/v2/pokemon/1`;

  constructor(private postService: PostService) {
    this.getData_List();
    this.getData_Details();
  }

  getData_List() {
    this.postService.getPost(this.listUrl).subscribe((response) => {
      this.pokemonsDataList.next(response);
    });
  }
  getData_Details() {
    this.postService.getPost(this.detailsUrl).subscribe((response) => {
      this.pokemonsDataDetail.next(response);
    });
  }
}
