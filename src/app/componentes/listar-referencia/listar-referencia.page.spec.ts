import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarReferenciaPage } from './listar-referencia.page';

describe('ListarReferenciaPage', () => {
  let component: ListarReferenciaPage;
  let fixture: ComponentFixture<ListarReferenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarReferenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarReferenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
