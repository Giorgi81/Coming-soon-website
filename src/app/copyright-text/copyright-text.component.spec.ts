import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightTextComponent } from './copyright-text.component';

describe('CopyrightTextComponent', () => {
  let component: CopyrightTextComponent;
  let fixture: ComponentFixture<CopyrightTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CopyrightTextComponent]
    });
    fixture = TestBed.createComponent(CopyrightTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
