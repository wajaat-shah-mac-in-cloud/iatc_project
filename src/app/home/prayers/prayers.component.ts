import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prayers',
  templateUrl: './prayers.component.html',
  styleUrls: ['./prayers.component.scss']
})
export class PrayersComponent implements OnInit {

  @Input() prayerTimesList: any = {};

  ngOnInit(): void {}

}
