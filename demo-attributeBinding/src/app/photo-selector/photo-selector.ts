import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-selector',
  imports: [],
  templateUrl: './photo-selector.html',
  styleUrl: './photo-selector.css',
})
export class PhotoSelector {
  photos: string[];
  selectedPhoto: string;

  constructor() {
    this.photos = [
      'images/image1.jpeg',
      'images/image2.jpeg',
      'images/image3.jpeg',
    ];
    this.selectedPhoto = this.photos[0];
  }

  selectPhoto(photo: string) {
    this.selectedPhoto = photo;
  }
}
