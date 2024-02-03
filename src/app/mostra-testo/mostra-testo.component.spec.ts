import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraTestoComponent } from './mostra-testo.component';

describe('MostraTestoComponent', () => {
  let component: MostraTestoComponent;
  let fixture: ComponentFixture<MostraTestoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostraTestoComponent]
    });
    fixture = TestBed.createComponent(MostraTestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
