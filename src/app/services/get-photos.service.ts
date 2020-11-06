import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetPhotosService {
  items = [];
  constructor(public http: HttpClient){ }
  private apiKey: string = 'w7yIPn3E89qvXvcmqi1s1JpcHFZMIjbjnhzxRenc';
  private fullUrl: string = null;
  private cameraUrl = null;
  private solUrl = null;
  private url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';


getPhotos(rover:string, camera: string, sol: number){
if(camera == 'all')this.cameraUrl = '&';
else this.cameraUrl = '&camera='+camera;
this.solUrl = '&sol='+sol.toString();


    this.fullUrl = this.url+rover+'/photos?'+this.solUrl+this.cameraUrl+'&api_key='+this.apiKey;
    console.log('GET FROM',this.fullUrl);
    return this.http.get(this.fullUrl);
}
}
