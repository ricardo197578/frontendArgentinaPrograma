import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSkillsComponent } from './agregar-skills.component';

describe('AgregarSkillsComponent', () => {
  let component: AgregarSkillsComponent;
  let fixture: ComponentFixture<AgregarSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
