import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroUserPage } from './registro-user.page';

describe('RegistroUserPage', () => {
  let component: RegistroUserPage;
  let fixture: ComponentFixture<RegistroUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
