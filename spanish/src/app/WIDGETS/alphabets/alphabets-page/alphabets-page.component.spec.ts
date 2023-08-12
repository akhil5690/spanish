import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetsPageComponent } from './alphabets-page.component';

describe('AlphabetsPageComponent', () => {
  let component: AlphabetsPageComponent;
  let fixture: ComponentFixture<AlphabetsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphabetsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlphabetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
