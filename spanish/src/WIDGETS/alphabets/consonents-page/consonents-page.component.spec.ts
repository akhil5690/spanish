import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsonentsPageComponent } from './consonents-page.component';

describe('ConsonentsPageComponent', () => {
  let component: ConsonentsPageComponent;
  let fixture: ComponentFixture<ConsonentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsonentsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsonentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
