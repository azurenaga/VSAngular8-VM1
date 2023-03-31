import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClscompComponent } from './clscomp.component';

describe('ClscompComponent', () => {
  let component: ClscompComponent;
  let fixture: ComponentFixture<ClscompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClscompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
