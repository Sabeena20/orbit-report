import { Component, OnInit,Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-count',
  templateUrl: './orbit-count.component.html',
  styleUrls: ['./orbit-count.component.css']
})
export class OrbitCountComponent implements OnInit {
  @Input() satellites: Satellite[];
  totalSatellites: Number = 0;
  constructor() { }

  ngOnInit() {
    

  }
    // BONUS PART B
  totalSpaceDebris() : Number {
    let count = 0;
    this.satellites.forEach(satellite => {
      if(satellite.type.toLowerCase() == 'space debris'){
        count++;
      }
    });
    return count;
  }
  totalCommunication() : Number {
    let count = 0;
    this.satellites.forEach(satellite => {
      if(satellite.type.toLowerCase() == 'communication'){
        count++;
      }
    });
    return count;
  }
  
  totalProbe() : Number {
    let count = 0;
    this.satellites.forEach(satellite => {
      if(satellite.type.toLowerCase() == 'probe'){
        count++;
      }
    });
    return count;
  }

  totalPositioning() : Number {
    let count = 0;
    this.satellites.forEach(satellite => {
      if(satellite.type.toLowerCase() == 'postioning'){
        count++;
      }
    });
    return count;
  }

  totalSpaceStation() : Number {
    let count = 0;
    this.satellites.forEach(satellite => {
      if(satellite.type.toLowerCase() == 'space station'){
        count++;
      }
    });
    return count;
  }

  totalTelescope() : Number {
    let count = 0;
    this.satellites.forEach(satellite => {
      if(satellite.type.toLowerCase() == 'telescope'){
        count++;
      }
    });
    return count;
  }

  




}
