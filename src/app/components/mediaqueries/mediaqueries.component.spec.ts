import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaqueriesComponent } from './mediaqueries.component';

describe('MediaqueriesComponent', () => {
  let component: MediaqueriesComponent;
  let fixture: ComponentFixture<MediaqueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaqueriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediaqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
