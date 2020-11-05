
import { Component, OnInit } from '@angular/core';
import {Camera, Rover} from './models/Select';
import {GetPhotosService} from './services/get-photos.service';
import {CameraFilterPipe} from './pipes/camera-filter.pipe';  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[GetPhotosService]
})
export class AppComponent implements OnInit {
  
  title = 'SpacePictures';
  private apiKey: string = 'w7yIPn3E89qvXvcmqi1s1JpcHFZMIjbjnhzxRenc';
  url: string = null;
  items = [];
  roverChose: string;
  cameraChose: string;
  cameras: Camera[];
  rovers: Rover[];
  sol: number = null;


  constructor(private apiGet: GetPhotosService) {  
  }
  ngOnInit(){
    this.url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key='+this.apiKey;
    //TODO get url to service
    this.apiGet.getPhotos(this.url)
    .subscribe(data=>{
      for( let key in data){
        if(data.hasOwnProperty(key))
        this.items.push(data[key]);
        this.items = this.items[0];
      }
  
      console.log(this.items);
    });

    this.rovers = [
      {id:'1', searchName: 'curiosity', fullName: 'Curiousity' },
      {id:'2', searchName: 'opportunity', fullName: 'Opportunity' },
      {id:'3', searchName: 'spirit', fullName: 'Spirit' },
    ];
    this.cameras = [
      {id:'1', searchName: 'fhaz', fullName: 'Front Hazard Avoidance Camera' },
      {id:'2', searchName: 'rhaz', fullName: 'Rear Hazard Avoidance Camera' },
      {id:'3', searchName: 'mast', fullName: 'Mast Camera' },
      {id:'4', searchName: 'chemcam', fullName: 'Chemistry and Camera Complex' },
      {id:'5', searchName: 'mahli', fullName: 'Mars Hand Lens Imager' },
      {id:'6', searchName: 'mardi', fullName: 'Mars Descent Imager' },
      {id:'7', searchName: 'navcam', fullName: 'Navigation Camera' },
      {id:'8', searchName: 'pancam', fullName: 'Panoramic Camera' },
      {id:'9', searchName: 'minites', fullName: 'Miniature Thermal Emission Spectrometer (Mini-TES)' },
    ];
      console.log(this.roverChose);
      console.log(this.url);
}
}