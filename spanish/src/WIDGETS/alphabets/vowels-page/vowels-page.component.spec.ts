import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VowelsPageComponent } from './vowels-page.component';

describe('VowelsPageComponent', () => {
  let component: VowelsPageComponent;
  let fixture: ComponentFixture<VowelsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VowelsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VowelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
