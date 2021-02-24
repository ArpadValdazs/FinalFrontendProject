import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletwoTableComponent } from './tabletwo-table.component';

describe('TabletwoTableComponent', () => {
  let component: TabletwoTableComponent;
  let fixture: ComponentFixture<TabletwoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabletwoTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletwoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
