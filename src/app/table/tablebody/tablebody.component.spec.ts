import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablebodyComponent } from './tablebody.component';

describe('TableComponent', () => {
  let component: TablebodyComponent;
  let fixture: ComponentFixture<TablebodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablebodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
