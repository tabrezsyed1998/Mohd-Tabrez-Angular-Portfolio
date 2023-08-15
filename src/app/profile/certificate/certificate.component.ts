import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export class CertificateComponent implements OnInit {
  angularTopics: any;
  webdevelopementTopics: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.angularTopics = this.profileService.angularTopics;
    this.webdevelopementTopics = this.profileService.webdevelopementTopics;
  }
  lightboxOpened = false;

  onLightboxOpen() {
    this.lightboxOpened = true;
  }

  onLightboxClose() {
    this.lightboxOpened = false;
  }
}
