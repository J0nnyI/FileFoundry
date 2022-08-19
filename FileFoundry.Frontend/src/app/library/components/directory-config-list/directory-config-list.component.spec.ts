import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryConfigListComponent } from './directory-config-list.component';

describe('DirectoryConfigListComponent', () => {
  let component: DirectoryConfigListComponent;
  let fixture: ComponentFixture<DirectoryConfigListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectoryConfigListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryConfigListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
