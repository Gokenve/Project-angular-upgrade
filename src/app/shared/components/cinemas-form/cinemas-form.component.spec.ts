import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemasFormComponent } from './cinemas-form.component';

describe('CinemasFormComponent', () => {
  let component: CinemasFormComponent;
  let fixture: ComponentFixture<CinemasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinemasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
