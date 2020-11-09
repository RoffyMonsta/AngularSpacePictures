
import { Component, OnInit } from '@angular/core';
import {Camera, Rover} from './models/Select';
import {GetPhotosService} from './services/get-photos.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[GetPhotosService]
})
export class AppComponent implements OnInit {
  
  title = 'SpacePictures';
  
  url: string = null;
  items = [];
  roverChose: string;
  more: boolean;
  cameraChose: string;
  solChose: number;
  cameras: Camera[];
  rovers: Rover[];
  sol: number = null;
  currentItemsToShow= [];
  letSearch: boolean = false;
  noImages: boolean = false;
  constructor(private apiGet: GetPhotosService) {  
        this.rovers = [
      {id:'0', searchName: 'curiosity', fullName: 'Curiousity' },
      {id:'1', searchName: 'opportunity', fullName: 'Opportunity' },
      {id:'2', searchName: 'spirit', fullName: 'Spirit' },
    ];
    this.cameras = [
      {id:'0', searchName: 'fhaz', fullName: 'Front Hazard Avoidance Camera' },
      {id:'1', searchName: 'rhaz', fullName: 'Rear Hazard Avoidance Camera' },
      {id:'2', searchName: 'mast', fullName: 'Mast Camera' },
      {id:'3', searchName: 'chemcam', fullName: 'Chemistry and Camera Complex' },
      {id:'4', searchName: 'mahli', fullName: 'Mars Hand Lens Imager' },
      {id:'5', searchName: 'mardi', fullName: 'Mars Descent Imager' },
      {id:'6', searchName: 'navcam', fullName: 'Navigation Camera' },
      {id:'7', searchName: 'pancam', fullName: 'Panoramic Camera' },
      {id:'8', searchName: 'minites', fullName: 'Miniature Thermal Emission Spectrometer (Mini-TES)' },
      {id:'9', searchName: 'all', fullName: 'All of them' },
    ];
  }
  ngOnInit(){
    
    this.noImages = false;


    if(this.letSearch){
     
      
      this.items = [];
    if(this.solChose > 1000 )this.solChose = 1000;
    if(this.roverChose !== undefined || this.cameraChose !== undefined){
    
    this.apiGet.getPhotos(this.rovers[this.roverChose]['searchName'], this.cameras[this.cameraChose]['searchName'], this.solChose)
    .subscribe(data=>{

      
      for( let key in data){
        if(data.hasOwnProperty(key))
        this.items.push(data[key]);
        this.items = this.items[0];
        this.currentItemsToShow = this.items; 
      }
      if(this.items.length === 0)this.noImages = true;
      this.letSearch = false;
    });
  }else console.log('Input data lol');
  };

}

startSearch(){
  this.letSearch = true;
  this.ngOnInit();
}

onPageChange($event) {
  this.currentItemsToShow =  this.items.slice($event.pageIndex*$event.pageSize, $event.pageIndex*$event.pageSize + $event.pageSize);
}
}