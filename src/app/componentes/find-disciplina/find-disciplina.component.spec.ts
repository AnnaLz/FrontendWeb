import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDisciplinaComponent } from './find-disciplina.component';

describe('FindDisciplinaComponent', () => {
  let component: FindDisciplinaComponent;
  let fixture: ComponentFixture<FindDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindDisciplinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
