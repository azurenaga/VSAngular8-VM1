import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeHi from '@angular/common/locales/hi';

registerLocaleData(localeHi);

@Component({
  selector: 'app-locale-id',
  templateUrl: './locale-id.component.html',
  styleUrls: ['./locale-id.component.css']
})
export class LocaleIDComponent {
  currentDate: number = Date.now();
}
