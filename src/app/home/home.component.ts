import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  prayerTimesList: any;

  ngOnInit(): void {
    this.getPrayerTimes();
  }

  // Todo - setup api call to get the actually adhan and iqamah times and remove mock data
  private getPrayerTimes() {
    this.prayerTimesList = {
      fajr : { adhan: '5:45 am', iqamah: '6:20 am' },
      dhur : { adhan: '12:12 pm', iqamah: '1:00 pm' },
      asr : { adhan: '3:00 pm', iqamah: '3:30 pm' },
      maghrib : { adhan: '5:28 pm', iqamah: '5:35 pm' },
      isha : { adhan: '7:15 pm', iqamah: '7:30 pm' },
   }
  }
}
