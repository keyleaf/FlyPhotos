import {Component} from '@angular/core';

import {PhotosService} from '../services/photos.service';

@Component({
  selector: 'preview-component',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {
  private list:any[]= [];
  constructor(private service : PhotosService){
    service.getPhotos().then(response =>{
      this.list = response.json();
    });
  }
}
