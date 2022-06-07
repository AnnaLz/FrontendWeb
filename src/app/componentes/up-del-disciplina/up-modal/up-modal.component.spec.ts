import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpModalComponent } from './up-modal.component';

describe('UpModalComponent', () => {
  let component: UpModalComponent;
  let fixture: ComponentFixture<UpModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
