import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum ScreenSize {
  XSMALL = 1, // 600
  SMALL = 2, // 1024
  MEDIUM = 3, // 1440
  LARGE = 4, // 1920
  XLARGE = 5, // 1920 +
}

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  private XSmall = new BehaviorSubject(false);
  private Small = new BehaviorSubject(false);
  private Large = new BehaviorSubject(false);
  private XLarge = new BehaviorSubject(false);
  private viewMobile = new BehaviorSubject(false);
  private screenSize = new BehaviorSubject(3);

  XSmallChanged = this.XSmall.asObservable();
  SmallChanged = this.Small.asObservable();
  LargeChanged = this.Large.asObservable();
  XLargeChanged = this.Large.asObservable();
  viewMobileChanged = this.viewMobile.asObservable();
  screenSizeChanged = this.screenSize.asObservable();

  constructor() {}

  changeScreenSize(screenSize: ScreenSize) {
    this.screenSize.next(screenSize);
    this.viewMobile.next(screenSize < ScreenSize.MEDIUM);
    this.XSmall.next(screenSize === ScreenSize.XSMALL);
    this.Small.next(screenSize === ScreenSize.SMALL);
    this.Large.next(screenSize === ScreenSize.LARGE);
    this.XLarge.next(screenSize === ScreenSize.XLARGE);
  }
}
