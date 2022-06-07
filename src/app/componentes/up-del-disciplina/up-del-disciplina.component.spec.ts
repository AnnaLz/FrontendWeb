import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UpDelDisciplinaComponent } from './up-del-disciplina.component';

describe('UpDelDisciplinaComponent', () => {
  let component: UpDelDisciplinaComponent;
  let fixture: ComponentFixture<UpDelDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpDelDisciplinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpDelDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
