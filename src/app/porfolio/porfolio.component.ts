import { Component, OnInit } from '@angular/core';

declare var window: any;
@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.css']
})
export class PorfolioComponent implements OnInit {
  imgModal: any;
  currImgSrc = '';
  constructor() { }

  ngOnInit(): void {
    this.imgModal = new window.bootstrap.Modal(
      document.getElementById('imgModal')
    );
  }
  onImgClick(e: any) {
    this.currImgSrc = e.src;
    this.imgModal.show();
  }

}
