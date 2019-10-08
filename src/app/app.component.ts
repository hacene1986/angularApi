import { Component, OnInit } from '@angular/core';
import {CloudeasierService} from '../app/cloudeasier.service'
import {Cloudeasier} from '../app/cloudeasier';
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-test';
  donnes: Object
  liste: any[] = []
  cloudeasier: Observable<Cloudeasier>;

  constructor (private cloudEasier: CloudeasierService){}

  ngOnInit(){
    this.getCloudEasier()
  }

  getCloudEasier() {
    this.cloudEasier.getCloud()
     .subscribe(data => {
       this.donnes = data;
     for(var property1 in this.donnes){
       this.liste.push(this.donnes[property1])
      // console.log(this.liste)
     }
   
     });
   }


  
}
