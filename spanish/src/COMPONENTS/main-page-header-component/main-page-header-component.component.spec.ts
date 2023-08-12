import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageHeaderComponentComponent } from './main-page-header-component.component';

describe('MainPageHeaderComponentComponent', () => {
  let component: MainPageHeaderComponentComponent;
  let fixture: ComponentFixture<MainPageHeaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageHeaderComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
