import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAlunoComponent } from './find-aluno.component';

describe('FindAlunoComponent', () => {
  let component: FindAlunoComponent;
  let fixture: ComponentFixture<FindAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
