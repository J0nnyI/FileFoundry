import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryConfigPageComponent } from './directory-config-page.component';

describe('DirectoryConfigPageComponent', () => {
  let component: DirectoryConfigPageComponent;
  let fixture: ComponentFixture<DirectoryConfigPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectoryConfigPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryConfigPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
