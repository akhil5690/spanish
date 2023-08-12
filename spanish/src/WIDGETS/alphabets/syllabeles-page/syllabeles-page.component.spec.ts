import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabelesPageComponent } from './syllabeles-page.component';

describe('SyllabelesPageComponent', () => {
  let component: SyllabelesPageComponent;
  let fixture: ComponentFixture<SyllabelesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyllabelesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyllabelesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
