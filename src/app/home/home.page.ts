import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  results = '';
  constructor(public camera: Camera) { }



  async takePhoto() {
    const isFromLibrary = false;
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: (isFromLibrary) ? this.camera.PictureSourceType.PHOTOLIBRARY : this.camera.PictureSourceType.CAMERA,
      saveToPhotoAlbum: false
    }

    try { await this.camera.cleanup(); } catch (err) { console.error(err); }
    const result = await this.camera.getPicture(options);
    this.results = JSON.stringify(result);
  }
}
