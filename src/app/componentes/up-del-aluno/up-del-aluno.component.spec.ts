import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpDelAlunoComponent } from './up-del-aluno.component';

describe('UpDelAlunoComponent', () => {
  let component: UpDelAlunoComponent;
  let fixture: ComponentFixture<UpDelAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpDelAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpDelAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
