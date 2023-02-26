import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemasFilterComponent } from './cinemas-filter.component';

describe('CinemasFilterComponent', () => {
  let component: CinemasFilterComponent;
  let fixture: ComponentFixture<CinemasFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemasFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinemasFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
