import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { MasterListRecords, MasterListFields } from '../interfaces/master-list-response';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favoriteStartups: MasterListRecords[] = [];

  constructor() { }

  addFavorite(startup:MasterListRecords){
    this.favoriteStartups.push(startup)
    console.log(this.favoriteStartups)
  }
  
  removeFavorite(startup:MasterListRecords){
    let index = this.favoriteStartups.findIndex(item=>item.id===startup.id)
    this.favoriteStartups.splice(index,1)
  }
}
