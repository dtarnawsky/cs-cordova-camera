import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.init();
  }

  async init() {
    await this.platform.ready();
    console.log('hiding splash');
    (navigator as any).splashscreen.hide();
    console.log('splash is hidden');    
  }
}
