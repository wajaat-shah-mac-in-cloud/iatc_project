import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prayers',
  templateUrl: './prayers.component.html',
  styleUrls: ['./prayers.component.scss']
})
export class PrayersComponent implements OnInit {

  prayerTimesList: any = {};

  ngOnInit(): void {
      this.getPrayerTimes();
  }

  getPrayerTimes(): void {
    this.prayerTimesList = {
       fajr : { adhan: '5:00 am', iqamah: '5:15 am' },
       dhur : { adhan: '1:00 pm', iqamah: '1:20 pm' },
       asr : { adhan: '3:00 pm', iqamah: '3:15 pm' },
       maghrib : { adhan: '5:30 pm', iqamah: '5:45 pm' },
       isha : { adhan: '7:20 pm', iqamah: '7:30 pm' },
    }
  }

}
