import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletwoComponent } from './tabletwo.component';

describe('TabletwoComponent', () => {
  let component: TabletwoComponent;
  let fixture: ComponentFixture<TabletwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabletwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
