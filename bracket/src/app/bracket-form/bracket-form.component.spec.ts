import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketFormComponent } from './bracket-form.component';

describe('BracketFormComponent', () => {
  let component: BracketFormComponent;
  let fixture: ComponentFixture<BracketFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BracketFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
