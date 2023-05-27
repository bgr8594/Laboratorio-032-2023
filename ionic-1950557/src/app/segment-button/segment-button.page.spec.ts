import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SegmentButtonPage } from './segment-button.page';

describe('SegmentButtonPage', () => {
  let component: SegmentButtonPage;
  let fixture: ComponentFixture<SegmentButtonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SegmentButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
