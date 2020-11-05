import { Pipe, PipeTransform } from '@angular/core';
import { Camera } from '../models/Select';
@Pipe({
    name: 'cameraFilter'
})
export class CameraFilterPipe implements PipeTransform {
transform(cameras: Camera[], searchTerm: string) :Camera[]{

    if(searchTerm == '1'){
        return cameras.filter(cameras => cameras.id.indexOf('8'.toString()) == -1 && cameras.id.indexOf('9'.toString()) == -1)  
    }
    else if(searchTerm == '2' || searchTerm == '3' ){
        return cameras.filter(cameras => cameras.id.indexOf('3'.toString()) == -1 && cameras.id.indexOf('4'.toString()) == -1 
        && cameras.id.indexOf('5'.toString()) == -1 && cameras.id.indexOf('6'.toString()) == -1) 
    }
    else if (searchTerm){
    return cameras;}
}
}