import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActualizarReferenciaPage } from './actualizar-referencia.page';

describe('ActualizarReferenciaPage', () => {
  let component: ActualizarReferenciaPage;
  let fixture: ComponentFixture<ActualizarReferenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarReferenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActualizarReferenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
