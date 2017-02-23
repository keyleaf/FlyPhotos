import {Component} from '@angular/core';

import {PhotosService} from '../services/photos.service';

@Component({
  selector: 'preview-component',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent{
  private list:any[]= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  constructor(private service : PhotosService){
    service.getPhotos().then(response =>{
      // this.list = response.json();
    });

  }
}
