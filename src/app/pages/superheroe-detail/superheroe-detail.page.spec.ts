import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuperheroeDetailPage } from './superheroe-detail.page';

describe('SuperheroeDetailPage', () => {
  let component: SuperheroeDetailPage;
  let fixture: ComponentFixture<SuperheroeDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
