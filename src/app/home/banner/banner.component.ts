import { AfterViewInit, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import * as moment from 'moment-timezone';
import { interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, OnDestroy {

  @Input() prayerTimesList: any = {};

  nextEventKey: string = '';
  timeRemaining: string = '';
  nextEventInfo!: { eventKey: string; timeRemaining: string; eventName: string };
  
  subscription: any;
  alive: boolean = false;


  constructor() {}

  ngOnInit() {
    this.alive = true;
    interval(1000)
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => {
      this.calculateNextEvent();
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }

  calculateNextEvent(): void {
    const now = moment();
    let minDiff = Infinity;
    let nextEventInfo!: { eventKey: string, timeRemaining: string, eventName: 'adhan' | 'iqamah' };
  
    for (const key in this.prayerTimesList) {
      if (this.prayerTimesList.hasOwnProperty(key)) {
        const adhanTime = moment(this.prayerTimesList[key].adhan, 'h:mm a');
        const iqamahTime = moment(this.prayerTimesList[key].iqamah, 'h:mm a');
        
        const adhanDiff = adhanTime.diff(now);
        const iqamahDiff = iqamahTime.diff(now);
        const prayerName = key.charAt(0).toUpperCase() + key.slice(1);
        if (adhanDiff > 0 && adhanDiff < minDiff) {
          minDiff = adhanDiff;
          nextEventInfo = { eventKey: prayerName, timeRemaining: moment.utc(adhanDiff).format('HH:mm:ss'), eventName: 'adhan' };
        }
  
        if (iqamahDiff > 0 && iqamahDiff < minDiff) {
          minDiff = iqamahDiff;
          nextEventInfo = { eventKey: prayerName, timeRemaining: moment.utc(iqamahDiff).format('HH:mm:ss'), eventName: 'iqamah' };
        }
      }
    }

    if (!nextEventInfo) {
      const firstEventKey = Object.keys(this.prayerTimesList)[0];
      const firstEvent = this.prayerTimesList[firstEventKey];
      nextEventInfo = {
        eventKey: firstEventKey.charAt(0).toUpperCase() + firstEventKey.slice(1),
        timeRemaining: moment.utc(moment(firstEvent.adhan, 'h:mm a').diff(now)).format('HH:mm:ss'),
        eventName: 'adhan'
      };
    }

    this.nextEventInfo = nextEventInfo;
  }

}
