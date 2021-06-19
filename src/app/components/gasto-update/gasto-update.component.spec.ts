import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoUpdateComponent } from './gasto-update.component';

describe('GastoUpdateComponent', () => {
  let component: GastoUpdateComponent;
  let fixture: ComponentFixture<GastoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastoUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
