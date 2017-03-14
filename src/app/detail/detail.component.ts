import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {PhotosService} from '../services/photos.service';

@Component({
  selector: 'detail-component',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  private photoDetail: any = {};

  constructor(private route: ActivatedRoute, private service: PhotosService) {
    var that = this;
    this.route.params.forEach((param: any) => {
      service.getPhotoById(param).then(response => {
        that.photoDetail = response.json();
      });
    });
  }
}
