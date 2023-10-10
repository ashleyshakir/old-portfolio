import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // AOS initialization - disabled on screens with a width less than or equal to 840 pixels
    AOS.init({
      disable: function () {
        let maxWidth = 840;
        return window.innerWidth <= maxWidth;
      },
    });
  }
}
