import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostLandComponent } from './lost-land.component';

describe('LostLandComponent', () => {
  let component: LostLandComponent;
  let fixture: ComponentFixture<LostLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostLandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LostLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
