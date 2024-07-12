import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router : Router) {
  }

  onContribute(){
    // const link=document.createElement('a');
    // link.target =  "_blank";
    // link.href="https://github.com/grraghav120/country-viewer/issues";
    // link.click();
    let url = "https://github.com/grraghav120/country-viewer/issues";
    window.open(url, "_blank");
  }
}
