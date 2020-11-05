import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetPhotosService {
  items = [];
  constructor(public http: HttpClient){ }



getPhotos(url){
  console.log('service');
    return this.http.get(url);
}
}
