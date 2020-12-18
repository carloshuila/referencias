import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroReferenciaPage } from './registro-referencia.page';

describe('RegistroReferenciaPage', () => {
  let component: RegistroReferenciaPage;
  let fixture: ComponentFixture<RegistroReferenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroReferenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroReferenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
