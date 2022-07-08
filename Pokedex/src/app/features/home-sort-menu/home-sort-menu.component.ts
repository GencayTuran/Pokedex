import { Component, Inject, inject, OnInit } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-home-sort-menu',
  templateUrl: './home-sort-menu.component.html',
  styleUrls: ['./home-sort-menu.component.css'],
})
export class HomeSortMenuComponent implements OnInit {
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
