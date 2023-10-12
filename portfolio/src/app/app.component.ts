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
      startEvent: 'DOMContentLoaded', // ensures animations are triggered once everything's loaded
      duration: 600,  // slightly faster animations for a snappier feel
      once: true,    // animation needs to be played only once
      offset: 50,    // trigger more quickly on mobile
      delay: 0,      // no delay, but can be adjusted
      easing: 'ease',  // a smoother easing function
    });
  }
}
