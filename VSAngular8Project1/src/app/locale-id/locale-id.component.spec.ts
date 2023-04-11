import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaleIDComponent } from './locale-id.component';

describe('LocaleIDComponent', () => {
  let component: LocaleIDComponent;
  let fixture: ComponentFixture<LocaleIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocaleIDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocaleIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
