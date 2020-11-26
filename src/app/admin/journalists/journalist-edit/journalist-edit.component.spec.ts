import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalistEditComponent } from './journalist-edit.component';

describe('JournalistEditComponent', () => {
  let component: JournalistEditComponent;
  let fixture: ComponentFixture<JournalistEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalistEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
