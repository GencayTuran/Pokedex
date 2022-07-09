import { Component, Inject, inject, OnInit } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { faArrowDown19 } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown91 } from '@fortawesome/free-solid-svg-icons';
import { faArrowDownAZ } from '@fortawesome/free-solid-svg-icons';
import { faArrowDownZA } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-sort-menu',
  templateUrl: './home-sort-menu.component.html',
  styleUrls: ['./home-sort-menu.component.css'],
})
export class HomeSortMenuComponent implements OnInit {
  faArrow19 = faArrowDown19;
  faArrow91 = faArrowDown91;
  faArrowAZ = faArrowDownAZ;
  faArrowZA = faArrowDownZA;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) private data: string,
    private bottomSheetRef: MatBottomSheetRef
  ) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {}
}
