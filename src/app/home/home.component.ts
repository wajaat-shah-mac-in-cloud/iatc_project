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
      fajr : { adhan: '5:00 am', iqamah: '5:15 am' },
      dhur : { adhan: '1:00 pm', iqamah: '1:20 pm' },
      asr : { adhan: '3:00 pm', iqamah: '3:15 pm' },
      maghrib : { adhan: '5:30 pm', iqamah: '5:45 pm' },
      isha : { adhan: '7:20 pm', iqamah: '7:30 pm' },
   }
  }

}
