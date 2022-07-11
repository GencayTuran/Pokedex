import { Component } from '@angular/core';
import { ResponsiveService, ScreenSize } from './services/responsive.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Pokedex';

  constructor(
    private responsiveService: ResponsiveService,
    breakpointObserver: BreakpointObserver
  ) {
    // Observe screenSize and let other components know through the responsive service
    breakpointObserver.observe([Breakpoints.XSmall]).subscribe((result) => {
      if (result.matches)
        this.responsiveService.changeScreenSize(ScreenSize.XSMALL);
    });
    breakpointObserver.observe([Breakpoints.Small]).subscribe((result) => {
      if (result.matches)
        this.responsiveService.changeScreenSize(ScreenSize.SMALL);
    });
    breakpointObserver.observe([Breakpoints.Medium]).subscribe((result) => {
      if (result.matches)
        this.responsiveService.changeScreenSize(ScreenSize.MEDIUM);
    });
    breakpointObserver.observe([Breakpoints.Large]).subscribe((result) => {
      if (result.matches)
        this.responsiveService.changeScreenSize(ScreenSize.LARGE);
    });
    breakpointObserver.observe([Breakpoints.XLarge]).subscribe((result) => {
      if (result.matches)
        this.responsiveService.changeScreenSize(ScreenSize.XLARGE);
    });
  }
}
