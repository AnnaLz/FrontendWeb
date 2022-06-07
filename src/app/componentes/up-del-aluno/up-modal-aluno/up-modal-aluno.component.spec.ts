import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpModalAlunoComponent } from './up-modal-aluno.component';

describe('UpModalAlunoComponent', () => {
  let component: UpModalAlunoComponent;
  let fixture: ComponentFixture<UpModalAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpModalAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpModalAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
