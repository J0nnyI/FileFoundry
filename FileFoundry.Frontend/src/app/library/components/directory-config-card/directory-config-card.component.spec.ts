import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryConfigCardComponent } from './directory-config-card.component';

describe('DirectoryConfigCardComponent', () => {
  let component: DirectoryConfigCardComponent;
  let fixture: ComponentFixture<DirectoryConfigCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectoryConfigCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryConfigCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
