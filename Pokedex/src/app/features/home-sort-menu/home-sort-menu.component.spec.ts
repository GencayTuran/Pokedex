import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSortMenuComponent } from './home-sort-menu.component';

describe('HomeSortMenuComponent', () => {
  let component: HomeSortMenuComponent;
  let fixture: ComponentFixture<HomeSortMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSortMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSortMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
