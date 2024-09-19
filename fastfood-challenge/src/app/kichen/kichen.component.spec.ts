import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KichenComponent } from './kichen.component';

describe('KichenComponent', () => {
  let component: KichenComponent;
  let fixture: ComponentFixture<KichenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KichenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KichenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
